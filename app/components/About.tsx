import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-olive-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-olive-900 mb-12 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="relative h-[500px] w-full">
            <Image
              src="/aboutme.jpg"
              alt="Jesse Vaerendonck"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-olive-800">
              I'm a second-year Applied Information Technology student at
              HoGent, passionate about full-stack development. With a keen
              interest in both front-end and back-end technologies, I'm
              constantly learning and working on projects to enhance my skills
              and create meaningful applications.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-olive-900">
                Education
              </h3>
              <p className="text-olive-800">
                Applied Information Technology
                <br />
                HoGent University of Applied Sciences
                <br />
                2022 - Present
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-olive-900">
                Interests
              </h3>
              <p className="text-olive-800">
                Full Stack Development, Web Technologies, Software Architecture,
                Problem Solving, Politics and Philosophy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
