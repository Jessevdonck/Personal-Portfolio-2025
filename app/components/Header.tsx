"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight 
      setIsScrolled(window.scrollY > heroHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4" : "py-6"}`}>
      <nav className={`container mx-auto px-6 flex ${isScrolled ? "justify-center" : "justify-between"}`}>
        {!isScrolled && <div className="text-olive-50 font-semibold text-xl">Jesse V.</div>}
        <ul
          className={`flex space-x-8 transition-all duration-300 ${
            isScrolled ? "bg-olive-900/40 backdrop-blur-sm px-8 py-2 rounded-full" : ""
          }`}
        >
          <li>
            <Link href="#about" className="text-olive-50 hover:text-olive-200 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-olive-50 hover:text-olive-200 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-olive-50 hover:text-olive-200 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

