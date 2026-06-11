"use client";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-cursor="light"
      className="relative min-h-screen flex items-center justify-center"
    >
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
        <div className="absolute inset-0 bg-gradient-to-b from-olive-900/30 via-olive-900/40 to-olive-900/60" />
      </div>

      <div className="relative z-10 text-center px-6">
        <p className="text-xs md:text-sm font-medium uppercase tracking-[0.3em] text-olive-200 mb-5">
          Full Stack Developer | Belgium
        </p>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white">
          Jesse Vaerendonck
        </h1>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        aria-label="Scroll to about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/70 transition-colors hover:text-white"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" strokeWidth={1.5} />
      </button>
    </section>
  );
};

export default Hero;
