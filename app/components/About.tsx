import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-28 bg-olive-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-olive-600 mb-3">
            Who I am
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-olive-900">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <Image
              src="/aboutme.jpg"
              alt="Jesse Vaerendonck"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 480px"
              priority
            />
          </div>

          <div className="space-y-8 text-olive-800">
            <p className="text-lg leading-relaxed">
              I&apos;m a full-stack developer with a background in Applied
              Information Technology from HoGent. I enjoy working across the
              entire stack, from clear, responsive interfaces to reliable
              back-ends, and I like turning ideas into software that people
              actually use, whether that&apos;s in a professional role, for
              clients, or through personal projects.
            </p>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-olive-600 mb-3">
                Education
              </h3>
              <p className="leading-relaxed">
                Applied Information Technology
                <br />
                HoGent University of Applied Sciences
                <br />
                Graduated 2026
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-olive-600 mb-3">
                Interests
              </h3>
              <p className="leading-relaxed">
                Full-stack development, web technologies, software
                architecture, problem solving, politics and philosophy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
