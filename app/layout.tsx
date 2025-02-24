import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google"

export const metadata: Metadata = {
  title: "Jesse Vaerendonck",
  description: "Portfolio of Jesse Vaerendonck, an applied information technology student and aspiring full-stack developer.",
};

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`antialiased ${inter.className} bg-warm-50 text-warm-900`}
      >
        {children}
      </body>
    </html>
  );
}
