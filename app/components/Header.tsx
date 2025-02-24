"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight
      setIsScrolled(window.scrollY > heroHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4" : "py-6"}`}>
      <nav className={`container mx-auto px-6 flex ${isScrolled ? "justify-center" : "justify-between"}`}>
        {!isScrolled && <div className="text-olive-50 font-semibold text-xl">Jesse V.</div>}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-olive-50 hover:text-olive-200 transition-colors">
            <Menu size={24} />
          </button>
        </div>
        <ul
          className={`md:flex md:space-x-8 transition-all duration-300 ${
            isScrolled ? "bg-olive-900/40 backdrop-blur-sm md:px-8 md:py-2 md:rounded-full" : ""
          } ${isMenuOpen ? "flex flex-col items-center justify-center space-y-8 fixed inset-0 bg-olive-900/90 backdrop-blur-md z-50" : "hidden"}`}
        >
          {isMenuOpen && (
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-olive-50 hover:text-olive-200 transition-colors"
            >
              <X size={24} />
            </button>
          )}
          <li>
            <Link
              href="#hero"
              className="text-olive-50 hover:text-olive-200 transition-colors text-2xl"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="text-olive-50 hover:text-olive-200 transition-colors text-2xl"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="text-olive-50 hover:text-olive-200 transition-colors text-2xl"
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-olive-50 hover:text-olive-200 transition-colors text-2xl"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

