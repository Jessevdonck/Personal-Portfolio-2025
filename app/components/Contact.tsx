"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

type FormStatus = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-olive-200 bg-olive-50/50 px-4 py-3 text-olive-900 placeholder:text-olive-400 transition-colors focus:border-olive-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-olive-500/20";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const socialLinks = [
  {
    label: "Email",
    href: "mailto:jvaerendonck@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jesse-vaerendonck/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/Jessevdonck",
    icon: Github,
  },
];

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const response = await fetch("https://formspree.io/f/xanqgjlr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-olive-600 mb-3">
            Get in touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-olive-900">
            Contact
          </h2>
          <p className="mt-4 text-olive-700 max-w-lg mx-auto">
            Have a question, opportunity, or just want to say hi? Send a
            message, I usually reply within a few days.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          variants={fadeUp}
          className="grid gap-10 lg:grid-cols-5 lg:gap-12"
        >
          <aside className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-olive-900 mb-2">
                Let&apos;s talk
              </h3>
              <p className="text-olive-700 leading-relaxed">
                Whether it&apos;s freelance work, a full-time role, or
                collaboration on a project, I&apos;d love to hear from you.
              </p>
            </div>
          </aside>

          <div className="lg:col-span-3">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="rounded-2xl border border-olive-200/80 bg-olive-50/40 p-6 sm:p-8 shadow-sm space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-olive-800"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className={inputClass}
                    required
                    disabled={status === "loading"}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-olive-800"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    className={inputClass}
                    required
                    disabled={status === "loading"}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-olive-800"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or question..."
                  className={`${inputClass} resize-y min-h-[140px]`}
                  required
                  disabled={status === "loading"}
                />
              </div>

              {status === "success" && (
                <p
                  role="status"
                  className="flex items-center gap-2 rounded-xl bg-olive-100 px-4 py-3 text-sm text-olive-800"
                >
                  <CheckCircle2 className="h-5 w-5 text-olive-600 shrink-0" />
                  Thanks for your message! I&apos;ll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p
                  role="alert"
                  className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800"
                >
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-olive-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-olive-800 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send message
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
