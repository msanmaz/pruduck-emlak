import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, phone, note } = await req.json();

  if (!name || !phone) {
    return NextResponse.json({ error: "Ad ve telefon zorunludur." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Produck Site <onboarding@resend.dev>",
    to: "osanmaz4992@gmail.com",
    subject: `Produck — Yeni Talep: ${name}`,
    html: `
      <h2>Yeni İlan Talebi</h2>
      <p><strong>Ad Soyad:</strong> ${name}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      ${note ? `<p><strong>Not:</strong> ${note}</p>` : ""}
    `,
  });

  if (error) {
    return NextResponse.json({ error: "E-posta gönderilemedi." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
