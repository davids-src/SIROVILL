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

    // ⚠️ KRITIKUS: await — ha dob, a catch blokk 502-vel tér vissza
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SIROVILL_ADMIN_EMAIL,
      replyTo: body.email,
      subject: `SIROVILL megkeresés — ${body.munkaTipus}`,
      html: htmlBody,
    });

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
