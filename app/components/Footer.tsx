import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-olive-700 text-olive-50 py-6">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm mb-2 sm:mb-0">
          &copy; {currentYear} Jesse V. All rights reserved.
        </p>
        <ul className="flex space-x-6">
          <Link
            href="https://github.com/Jessevdonck"
            target="_blank"
            className="text-sm hover:text-olive-200 transition-colors"
          >
            <Github />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jesse-vaerendonck/"
            target="_blank"
            className="text-sm hover:text-olive-200 transition-colors"
          >
            <Linkedin />
          </Link>
          <Link
            href="mailto:jvaerendonck@gmail.com"
            target="_blank"
            className="text-sm hover:text-olive-200 transition-colors"
          >
            <Mail />
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
