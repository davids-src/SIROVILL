import { SmtpClient } from "npm:smtp@0.1.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactPayload {
  nev?: string;
  email?: string;
  telefon?: string;
  helyszin?: string;
  munka?: string;
  uzenet?: string;
  forras?: string;
}

async function sendEmail(payload: ContactPayload): Promise<boolean> {
  const host = Deno.env.get("SMTP_HOST");
  const portStr = Deno.env.get("SMTP_PORT");
  const user = Deno.env.get("SMTP_USER");
  const pass = Deno.env.get("SMTP_PASS");
  const adminEmail = Deno.env.get("SIROVILL_ADMIN_EMAIL");

  if (!host || !user || !pass || !adminEmail) {
    console.error("Missing SMTP configuration");
    return false;
  }

  const port = portStr ? parseInt(portStr, 10) : 587;

  const client = new SmtpClient();
  await client.connectTLS({
    hostname: host,
    port,
    username: user,
    password: pass,
  });

  const body = [
    "Új SIROVILL felmérés-kérés érkezett:",
    "",
    `Név: ${payload.nev ?? "-"}`,
    `E-mail: ${payload.email ?? "-"}`,
    `Telefonszám: ${payload.telefon ?? "-"}`,
    `Helyszín típusa: ${payload.helyszin ?? "-"}`,
    `Munka típusa: ${payload.munka ?? "-"}`,
    `Forrás: ${payload.forras ?? "-"}`,
    "",
    "Üzenet:",
    payload.uzenet ?? "-",
  ].join("\n");

  try {
    await client.send({
      from: user,
      to: adminEmail,
      subject: `SIROVILL felmérés-kérés — ${payload.nev ?? "ismeretlen"}`,
      content: body,
    });
    await client.close();
    return true;
  } catch (err) {
    console.error("SMTP send failed:", err);
    try { await client.close(); } catch { /* ignore */ }
    return false;
  }
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ success: false, error: "method_not_allowed" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }

  try {
    const payload: ContactPayload = await req.json();

    if (!payload.nev || !payload.email || !payload.helyszin || !payload.munka) {
      return new Response(
        JSON.stringify({ success: false, error: "missing_fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const emailed = await sendEmail(payload);

    if (!emailed) {
      return new Response(
        JSON.stringify({ success: false, error: "email_failed" }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ success: false, error: "server_error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
