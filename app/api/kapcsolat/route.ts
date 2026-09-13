import type { Metadata } from "next";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Kötelező mezők ellenőrzése
    if (
      !body.nev ||
      !body.email ||
      !body.helyszinTipus ||
      !body.munkaTipus ||
      !body.gdpr
    ) {
      return NextResponse.json(
        { success: false, error: "missing_fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const htmlBody = `
<!DOCTYPE html>
<html lang="hu">
<head><meta charset="UTF-8"><title>SIROVILL megkeresés</title></head>
<body style="font-family:sans-serif;color:#222;max-width:600px;margin:0 auto;padding:24px">
  <div style="border-left:4px solid #F5B81C;padding-left:16px;margin-bottom:24px">
    <h1 style="margin:0;font-size:20px;color:#0A0A0C;background:#F5B81C;padding:8px 16px;display:inline-block">
      SIROVILL — Új megkeresés
    </h1>
  </div>
  <table style="width:100%;border-collapse:collapse">
    <tr><td style="padding:8px;font-weight:bold;width:180px;background:#f5f5f5">Név</td><td style="padding:8px">${escapeHtml(body.nev)}</td></tr>
    <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">E-mail</td><td style="padding:8px"><a href="mailto:${escapeHtml(body.email)}">${escapeHtml(body.email)}</a></td></tr>
    <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Telefonszám</td><td style="padding:8px">${body.telefon ? escapeHtml(body.telefon) : "—"}</td></tr>
    <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Helyszín típusa</td><td style="padding:8px">${escapeHtml(body.helyszinTipus)}</td></tr>
    <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Munka típusa</td><td style="padding:8px">${escapeHtml(body.munkaTipus)}</td></tr>
    <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Üzenet</td><td style="padding:8px">${body.uzenet ? escapeHtml(body.uzenet).replace(/\n/g, "<br>") : "—"}</td></tr>
    <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Forrás</td><td style="padding:8px;color:#888;font-size:12px">${escapeHtml(body.forras ?? "ismeretlen")}</td></tr>
    <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">GDPR elfogadva</td><td style="padding:8px">Igen</td></tr>
  </table>
  <p style="margin-top:24px;font-size:12px;color:#888">Ez az e-mail a sirovill.hu kapcsolati űrlapjáról érkezett.</p>
</body>
</html>`;

    const smtpUser = process.env.SMTP_USER || "";
    const smtpFrom = process.env.SMTP_FROM || smtpUser;

    const customerHtmlBody = `
<!DOCTYPE html>
<html lang="hu">
<head><meta charset="UTF-8"><title>Köszönjük megkeresését!</title></head>
<body style="font-family:sans-serif;color:#222;max-width:600px;margin:0 auto;padding:24px">
  <div style="border-left:4px solid #F5B81C;padding-left:16px;margin-bottom:24px">
    <h1 style="margin:0;font-size:20px;color:#0A0A0C;background:#F5B81C;padding:8px 16px;display:inline-block">
      SIROVILL — Sikeres kapcsolatfelvétel
    </h1>
  </div>
  <p style="margin-bottom: 16px">Kedves <strong>${escapeHtml(body.nev)}</strong>!</p>
  <p style="margin-bottom: 16px">Köszönjük megkeresésedet! Üzenetedet sikeresen rögzítettük rendszerünkben. Szakértőnk hamarosan, legkésőbb 1 munkanapon belül felveszi veled a kapcsolatot a megadott elérhetőségeiden.</p>
  
  <div style="background: #f9f9f9; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
    <p style="margin: 0 0 8px 0; font-size: 14px; color: #555;">Az általad megadott adatok:</p>
    <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
      <li style="margin-bottom: 4px;"><strong>Munka típusa:</strong> ${escapeHtml(body.munkaTipus)}</li>
      <li><strong>Helyszín:</strong> ${escapeHtml(body.helyszinTipus)}</li>
    </ul>
  </div>
  
  <p style="margin-bottom: 24px">Üdvözlettel,<br><strong>A SIROVILL csapata</strong></p>
  <div style="font-size:12px;color:#888;border-top:1px solid #eaeaea;padding-top:16px">
    <a href="https://sirovill.hu" style="color:#F5B81C;text-decoration:none;font-weight:bold;">sirovill.hu</a> — Villanyszerelés, meglepetések nélkül.<br><br>
    Ez egy automatikusan generált e-mail. Kérjük, erre az e-mailre ne válaszolj, ha mégis kapcsolatba szeretnél lépni velünk, használd a weboldalon található elérhetőségeinket.
  </div>
</body>
</html>`;

    // ⚠️ KRITIKUS: await Promise.all — mindkettőt egyszerre küldjük
    await Promise.all([
      // 1. Admin értesítés nektek
      transporter.sendMail({
        from: smtpFrom,
        to: process.env.SIROVILL_ADMIN_EMAIL,
        replyTo: body.email,
        sender: smtpUser, // Explicit sender header
        envelope: {
          from: smtpUser, // Kőkeményen felülírja a MAIL FROM-ot
          to: process.env.SIROVILL_ADMIN_EMAIL || "",
        },
        subject: `SIROVILL megkeresés — ${body.munkaTipus}`,
        html: htmlBody,
      }),
      // 2. Visszaigazolás az ügyfélnek
      transporter.sendMail({
        from: smtpFrom,
        to: body.email,
        replyTo: process.env.SIROVILL_ADMIN_EMAIL,
        sender: smtpUser, // Explicit sender header
        envelope: {
          from: smtpUser,
          to: body.email,
        },
        subject: `Sikeres kapcsolatfelvétel — SIROVILL`,
        html: customerHtmlBody,
      })
    ]);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("SIROVILL e-mail küldés sikertelen:", err);
    // ⛔ SOHA ne adj vissza success:true itt!
    return NextResponse.json(
      { success: false, error: "email_failed" },
      { status: 502 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}
