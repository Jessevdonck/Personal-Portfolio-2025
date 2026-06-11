"use client";

import { motion } from "framer-motion";
import { Briefcase, Trophy } from "lucide-react";

interface TimelineItem {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string;
  skills?: string[];
  isAward?: boolean;
  current?: boolean;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    position: "Junior Consultant",
    company: "Elmos",
    period: "Aug 2026 — Present",
    description:
      "Working as a junior consultant at Elmos, contributing to client projects and delivering IT solutions.",
    current: true,
  },
  {
    id: 2,
    position: "Internship Software Developer",
    company: "Jan De Nul",
    period: "Feb 2026 — May 2026",
    description:
      "Built an internal “Who’s Who” search platform using .NET, Elasticsearch, and Blazor, allowing users to find employees, vessels, and construction sites.",
    skills: [
      "C#",
      ".NET",
      "Blazor",
      "SQL Server",
      "Elasticsearch",
      "Refit",
      "REST APIs",
    ],
  },
  {
    id: 3,
    position: "Webmaster",
    company: "Chess Club Kalken",
    period: "2025 — Present",
    description:
      "Managed and maintained the chess club website, ensuring optimal performance and a clear experience for members and visitors.",
    skills: ["Next.js", "Tailwind", "React"],
    current: true,
  },
  {
    id: 4,
    position: "Webmaster",
    company: "KSK Colle",
    period: "2024 — Present",
    description:
      "Managed and maintained the chess club website, including tournament flows, player data, and day-to-day content updates.",
    skills: ["Next.js", "Tailwind", "Node.js"],
    current: true,
  },
  {
    id: 5,
    position: "Software Developer",
    company: "Signpost",
    period: "Summer 2024 — 2025",
    description:
      "Developed full-stack applications and implemented new features for the Signpost platform.",
    skills: ["React", "PHP", ".NET", "C#", "Grafana"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function ExperienceCard({ item }: { item: TimelineItem }) {
  return (
    <motion.li variants={fadeUp} className="relative pl-10 sm:pl-12">
      <span
        className={`absolute left-0 top-6 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-[3px] sm:h-5 sm:w-5 ${
          item.current
            ? "border-olive-600 bg-olive-600 ring-4 ring-olive-600/20"
            : "border-olive-300 bg-white"
        }`}
        aria-hidden
      />

      <article
        className={`rounded-2xl border p-6 sm:p-7 transition-shadow duration-300 hover:shadow-md ${
          item.current
            ? "border-olive-300 bg-white shadow-sm"
            : "border-olive-200/80 bg-olive-50/60"
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <time className="text-xs font-semibold uppercase tracking-widest text-olive-600">
              {item.period}
            </time>
            <h3 className="mt-2 text-xl sm:text-2xl font-bold text-olive-900">
              {item.position}
            </h3>
            <p className="mt-1 flex items-center gap-2 text-olive-700 font-medium">
              <Briefcase className="h-4 w-4 text-olive-500 shrink-0" />
              {item.company}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {item.current && (
              <span className="rounded-full bg-olive-600 px-3 py-1 text-xs font-semibold text-white">
                Current
              </span>
            )}
            {item.isAward && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                <Trophy className="h-3.5 w-3.5" />
                Award
              </span>
            )}
          </div>
        </div>

        <p className="text-olive-700 text-sm sm:text-base leading-relaxed">
          {item.description}
        </p>

        {item.skills && item.skills.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {item.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-olive-100 px-3 py-1 text-xs font-medium text-olive-800"
              >
                {skill}
              </li>
            ))}
          </ul>
        )}
      </article>
    </motion.li>
  );
}

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 sm:py-28 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          variants={fadeUp}
          className="mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-olive-600 mb-3">
            Career path
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-olive-900">
            Experience
          </h2>
          <p className="mt-4 text-olive-700 max-w-lg">
            From internships and client work to maintaining live products
          </p>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.05 }}
          className="relative space-y-8"
        >
          <div
            className="absolute left-0 top-3 bottom-3 w-px bg-olive-200"
            aria-hidden
          />
          {timelineData.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
