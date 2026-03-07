"use client";

import { useState } from "react";
import { Trophy } from "lucide-react";

interface TimelineItem {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string;
  skills?: string[];
  isAward?: boolean;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    position: "Software Developer",
    company: "Signpost",
    period: "Summer 2024 - 2025",
    description:
      "Developed full-stack applications and implemented new features for the Signpost platform.",
    skills: ["React", "PHP", ".NET", "C#", "Grafana"],
  },
    {
    id: 2,
    position: "Webmaster",
    company: "KSK Colle",
    period: "2024 - Present",
    description:
      "Managed and maintained the chess website, ensuring optimal performance and user experience.",
    skills: ["NextJS", "Tailwind", "Node.js"],
  },
  {
    id: 3,
    position: "Webmaster",
    company: "Chess Club Kalken",
    period: "2025 - Present",
    description:
      "Managed and maintained the chess website, ensuring optimal performance and user experience.",
    skills: ["NextJS", "Tailwind"],
  },
  {
    id: 4,
    position: "Reagent Game Jam",
    company: "HoGent",
    period: "April 2024",
    description:
      'Participated in the first edition of the Reagent Game Jam at HOGENT. Together with Jordan Bentkowski, I developed the game "The Not-So-Handyman", which won the award for Best Fun Game. The theme was tinkering, and the game focused on a handyman with a gambling addiction who keeps losing his earnings playing blackjack.',
    skills: ["Unity", "C#", "Aseprite", "Fl Studio"],
    isAward: true,
  },
{
    id: 5,
    position: "Internship Software Developer",
    company: "Jan De Nul",
    period: "February 2026 - May 2026",
    description:
      'Built an internal “Who’s Who” search platform using .NET, Elasticsearch, and Blazor, allowing users to find employees, vessels, and construction sites.',
    skills: ["C#", ".NET", "Blazor", "SQL Server", "Elasticsearch", "Refit", "REST APIs", "CSS"],
    isAward: false,
  },
];

export default function ExperienceTimeline() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl font-bold text-olive-900 mb-16 text-center">
          Experience
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-olive-200 -translate-x-1/2" />
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={item.id}
                className={`flex gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="w-1/2">
                  <div
                    className={`p-6 rounded-lg transition-all duration-300 cursor-pointer ${
                      hoveredId === item.id
                        ? "bg-olive-100 shadow-lg scale-105"
                        : "bg-olive-50 shadow"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-semibold text-olive-600 uppercase tracking-wide">
                          {item.period}
                        </p>
                        <h3 className="text-xl font-bold text-olive-900 mt-2">
                          {item.position}
                        </h3>
                        <p className="text-olive-700 font-medium mb-3">
                          {item.company}
                        </p>
                      </div>
                      {item.isAward && (
                        <Trophy className="size-6 text-amber-500 flex-shrink-0" />
                      )}
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        hoveredId === item.id
                          ? "max-h-48 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-olive-600 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {item.skills && item.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="inline-block bg-olive-200 text-olive-800 text-xs font-semibold px-3 py-1 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-12 flex items-start justify-center">
                  <div
                    className={`w-4 h-4 rounded-full border-4 transition-all duration-300 ${
                      hoveredId === item.id
                        ? "bg-olive-600 border-olive-600 scale-125"
                        : "bg-white border-olive-300"
                    }`}
                  />
                </div>

                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
