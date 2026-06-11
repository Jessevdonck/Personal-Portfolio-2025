import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-olive-200 bg-olive-50 py-8">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-olive-600">
          &copy; {currentYear} Jesse Vaerendonck
        </p>
        <ul className="flex items-center gap-5">
          <li>
            <Link
              href="https://github.com/Jessevdonck"
              target="_blank"
              aria-label="GitHub"
              className="text-olive-500 transition-colors hover:text-olive-800"
            >
              <Github className="h-5 w-5" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/jesse-vaerendonck/"
              target="_blank"
              aria-label="LinkedIn"
              className="text-olive-500 transition-colors hover:text-olive-800"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </li>
          <li>
            <Link
              href="mailto:jvaerendonck@gmail.com"
              aria-label="Email"
              className="text-olive-500 transition-colors hover:text-olive-800"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
