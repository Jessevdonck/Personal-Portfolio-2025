"use client"
import { ChevronDown } from "lucide-react"

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    aboutSection?.scrollIntoView({ behavior: "smooth"})
  }

    return (
      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lingchor-lDy1K7RkLeA-unsplash.jpg-W08fyRXq1fuaA0rRU8ZYdNRM6momli.jpeg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-olive-900/40" />
        </div>

        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Jesse Vaerendonck</h1>
          <p className="text-xl md:text-2xl text-olive-100 drop-shadow">
            Full Stack Developer
          </p>
        </div>

        {/* Arrow dropdown */}
          <button
            onClick={scrollToAbout}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white cursor-pointer transition-transform hover:translate-y-1"
          >
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </button>
      </section>
    )
  }

  export default Hero
