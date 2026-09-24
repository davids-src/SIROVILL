import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Required fields check
    if (
      !body.nev ||
      !body.email ||
      !body.customer_type ||
      !body.request_type ||
      !body.property_type ||
      !body.location ||
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

    const firstTouch = body.attribution?.first_touch || {};
    const lastTouch = body.attribution?.last_touch || {};

    const htmlBody = `
<!DOCTYPE html>
<html lang="hu">
<head><meta charset="UTF-8"><title>SIROVILL Új Megkeresés</title></head>
<body style="font-family:sans-serif;color:#222;max-width:640px;margin:0 auto;padding:24px">
  <div style="border-left:4px solid #F5B81C;padding-left:16px;margin-bottom:24px">
    <h1 style="margin:0;font-size:20px;color:#0A0A0C;background:#F5B81C;padding:8px 16px;display:inline-block">
      SIROVILL — Új megkeresés (${escapeHtml(body.customer_type)})
    </h1>
  </div>

  <h3 style="margin-top:16px;margin-bottom:8px;color:#0A0A0C;border-b:1px solid #ddd;padding-bottom:4px">1. Ügyfél Adatok</h3>
  <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
    <tr><td style="padding:8px;font-weight:bold;width:180px;background:#f5f5f5">Név / Cégnév</td><td style="padding:8px">${escapeHtml(body.nev)}</td></tr>
    <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">E-mail</td><td style="padding:8px"><a href="mailto:${escapeHtml(body.email)}">${escapeHtml(body.email)}</a></td></tr>
    <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Telefonszám</td><td style="padding:8px">${body.telefon ? escapeHtml(body.telefon) : "—"}</td></tr>
    <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Ügyfél típusa</td><td style="padding:8px">${escapeHtml(body.customer_type)}</td></tr>
    <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Munkavégzés helyszíne</td><td style="padding:8px">${escapeHtml(body.location)}</td></tr>
  </table>

  <h3 style="margin-top:16px;margin-bottom:8px;color:#0A0A0C;border-b:1px solid #ddd;padding-bottom:4px">2. Projekt & Igény Részletek</h3>
  <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
    <tr><td style="padding:8px;font-weight:bold;width:180px;background:#f5f5f5">Igény típusa</td><td style="padding:8px">${escapeHtml(body.request_type)}</td></tr>
    <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Ingatlan típusa</td><td style="padding:8px">${escapeHtml(body.property_type)}</td></tr>
    <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Tervezett kezdés / Időzítés</td><td style="padding:8px">${body.timeframe ? escapeHtml(body.timeframe) : "—"}</td></tr>
    <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Kiválasztott szolgáltatás</td><td style="padding:8px">${body.munkaTipus ? escapeHtml(body.munkaTipus) : "—"}</td></tr>
    <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Üzenet / Leírás</td><td style="padding:8px">${body.uzenet ? escapeHtml(body.uzenet).replace(/\n/g, "<br>") : "—"}</td></tr>
  </table>

  <h3 style="margin-top:16px;margin-bottom:8px;color:#0A0A0C;border-b:1px solid #ddd;padding-bottom:4px">3. Marketing Attribution & Analytics</h3>
  <table style="width:100%;border-collapse:collapse;margin-bottom:20px;font-size:12px font-family:monospace">
    <tr><td style="padding:6px;font-weight:bold;width:180px;background:#f5f5f5">Gomb forrás</td><td style="padding:6px">${escapeHtml(body.forras ?? "ismeretlen")}</td></tr>
    <tr><td style="padding:6px;font-weight:bold;background:#f5f5f5">First Touch Source / Medium</td><td style="padding:6px">${escapeHtml(firstTouch.utm_source || "direct")} / ${escapeHtml(firstTouch.utm_medium || "none")}</td></tr>
    <tr><td style="padding:6px;font-weight:bold;background:#f5f5f5">First Touch Landing</td><td style="padding:6px">${escapeHtml(firstTouch.landing_page || "—")}</td></tr>
    <tr><td style="padding:6px;font-weight:bold;background:#f5f5f5">Last Touch Source / Medium</td><td style="padding:6px">${escapeHtml(lastTouch.utm_source || "direct")} / ${escapeHtml(lastTouch.utm_medium || "none")}</td></tr>
    <tr><td style="padding:6px;font-weight:bold;background:#f5f5f5">GCLID / WBRAID</td><td style="padding:6px">${escapeHtml(lastTouch.gclid || lastTouch.gbraid || "—")}</td></tr>
    <tr><td style="padding:6px;font-weight:bold;background:#f5f5f5">GDPR elfogadva</td><td style="padding:6px">Igen</td></tr>
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
  <p style="margin-bottom: 16px">Köszönjük megkeresését! Üzenetét sikeresen rögzítettük. Szakértőnk legkésőbb 1 munkanapon belül felveszi Önnel a kapcsolatot a megadott elérhetőségein.</p>
  
  <div style="background: #f9f9f9; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
    <p style="margin: 0 0 8px 0; font-size: 14px; color: #555;">Az Ön által megadott adatok:</p>
    <ul style="margin: 0; padding-left: 20px; font-size: 14px; line-height: 1.6;">
      <li><strong>Igény típusa:</strong> ${escapeHtml(body.request_type)}</li>
      <li><strong>Ingatlan típusa:</strong> ${escapeHtml(body.property_type)}</li>
      <li><strong>Munkavégzés helyszíne:</strong> ${escapeHtml(body.location)}</li>
    </ul>
  </div>
  
  <p style="margin-bottom: 24px">Üdvözlettel,<br><strong>A SIROVILL csapata</strong></p>
  <div style="font-size:12px;color:#888;border-top:1px solid #eaeaea;padding-top:16px">
    <a href="https://sirovill.hu" style="color:#F5B81C;text-decoration:none;font-weight:bold;">sirovill.hu</a> — Villanyszerelés, meglepetések nélkül.<br><br>
    Ez egy automatikusan generált e-mail. Kérjük, erre az e-mailre ne válaszoljon közvetlenül.
  </div>
</body>
</html>`;

    await Promise.all([
      transporter.sendMail({
        from: smtpFrom,
        to: process.env.SIROVILL_ADMIN_EMAIL,
        replyTo: body.email,
        sender: smtpUser,
        envelope: {
          from: smtpUser,
          to: process.env.SIROVILL_ADMIN_EMAIL || "",
        },
        subject: `SIROVILL megkeresés — ${body.request_type} (${body.customer_type})`,
        html: htmlBody,
      }),
      transporter.sendMail({
        from: smtpFrom,
        to: body.email,
        replyTo: process.env.SIROVILL_ADMIN_EMAIL,
        sender: smtpUser,
        envelope: {
          from: smtpUser,
          to: body.email,
        },
        subject: `Sikeres kapcsolatfelvétel — SIROVILL`,
        html: customerHtmlBody,
      }),
    ]);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("SIROVILL e-mail küldés sikertelen:", err);
    return NextResponse.json(
      { success: false, error: "email_failed" },
      { status: 502 }
    );
  }
}

function escapeHtml(str: string): string {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}
