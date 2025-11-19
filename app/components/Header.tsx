"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4" : "py-6"}`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center md:justify-center">
        <div
          className={`absolute left-6 font-semibold text-xl transition-opacity duration-300 ${isScrolled ? "hidden" : "opacity-100"}`}
        >
          <Link href={"#hero"} className="text-olive-50">
            Jesse V.
          </Link>
        </div>
        <div className="md:hidden ml-auto">
          <button
            onClick={toggleMenu}
            className={`transition-colors ${isScrolled ? "text-olive-900" : "text-olive-50"} hover:text-white`}
          >
            <Menu size={24} />
          </button>
        </div>
        <ul
          className={`hidden md:flex md:space-x-8 transition-all duration-300 ${
            isScrolled
              ? "bg-olive-900/40 backdrop-blur-sm px-8 py-2 rounded-full"
              : ""
          }`}
        >
          <li>
            <Link
              href="#about"
              className="text-olive-50 hover:text-white transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#experience"
              className="text-olive-50 hover:text-white transition-colors"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="text-olive-50 hover:text-white transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-olive-50 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-olive-900/90 backdrop-blur-md z-50 flex items-center justify-center md:hidden">
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-olive-50 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          <ul className="flex flex-col items-center space-y-8">
            <li>
              <Link
                href="#about"
                className="text-olive-50 hover:text-white transition-colors text-2xl"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#experience"
                className="text-olive-50 hover:text-white transition-colors text-2xl"
                onClick={toggleMenu}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="text-olive-50 hover:text-white transition-colors text-2xl"
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-olive-50 hover:text-white transition-colors text-2xl"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
