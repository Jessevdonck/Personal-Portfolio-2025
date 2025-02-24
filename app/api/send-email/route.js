import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { name, email, message } = await request.json();

  try {
    await resend.emails.send({
      from: "PORTFOLIO CONTACT <noreply@jessevdonck.com>",
      to: ["jvaerendonck@gmail.com"],
      subject: "Contact Form Portfolio",
      html: `
        <strong>Nieuw bericht van je portfolio:</strong>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Bericht:</strong> ${message}</p>
      `,
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}