"use client";

import { sendEmail } from "@/lib/resend";
import { useRef } from "react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const send = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      await sendEmail({ name, email, message });
      console.log("E-mail succesvol verzonden!");
      formRef.current?.reset(); // Reset het formulier na verzending
    } catch (error) {
      console.error("Fout bij het verzenden van de e-mail:", error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-olive-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-olive-900 mb-8">Contact Me</h2>
        <form ref={formRef} action={send} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-olive-800 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-olive-300 rounded-md focus:ring-2 focus:ring-olive-500 focus:border-transparent"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-olive-800 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-olive-300 rounded-md focus:ring-2 focus:ring-olive-500 focus:border-transparent"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-olive-800 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full p-2 border border-olive-300 rounded-md focus:ring-2 focus:ring-olive-500 focus:border-transparent"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-olive-600 text-white py-2 px-4 rounded-md hover:bg-olive-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;