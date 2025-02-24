"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: { name: string; email: string; message: string }) => {
  const { name, email, message } = formData;

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
};