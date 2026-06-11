"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import projects from "../data/projects";

type Project = {
  title: string;
  description: string;
  image: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <motion.article
      variants={fadeUp}
      className={`group relative overflow-hidden rounded-2xl border border-olive-200/80 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl ${
        featured
          ? "min-h-[360px] lg:min-h-full lg:col-span-4 lg:row-span-2"
          : "min-h-[300px] lg:col-span-2"
      }`}
    >
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        fill
        sizes={
          featured
            ? "(max-width: 1024px) 100vw, 50vw"
            : "(max-width: 1024px) 100vw, 33vw"
        }
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        quality={90}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-olive-900/95 via-olive-900/50 to-olive-900/10 transition-opacity duration-300 group-hover:via-olive-900/70" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-7">
        <div className="translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
          <p className="text-xs font-semibold uppercase tracking-widest text-olive-300 mb-2">
            {project.technologies.slice(0, 3).join(" · ")}
          </p>
          <h3
            className={`font-bold text-white leading-tight ${
              featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`mt-2 text-olive-100/90 leading-relaxed ${
              featured
                ? "text-sm sm:text-base line-clamp-3"
                : "text-sm line-clamp-2"
            }`}
          >
            {project.description}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2 opacity-100 translate-y-0 transition-all duration-300 lg:opacity-0 lg:translate-y-3 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:group-focus-within:opacity-100 lg:group-focus-within:translate-y-0">
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-olive-900 transition-colors hover:bg-olive-100"
              >
                Details
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </DialogTrigger>
            <ProjectDialogContent project={project} />
          </Dialog>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <ExternalLink className="h-4 w-4" />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectDialogContent({ project }: { project: Project }) {
  return (
    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        width={2000}
        height={1000}
        className="w-full h-56 sm:h-64 object-cover rounded-lg mb-4"
        quality={100}
      />
      <DialogHeader>
        <DialogTitle className="text-2xl text-olive-900">
          {project.title}
        </DialogTitle>
        <DialogDescription className="text-olive-700 mt-4 text-base leading-relaxed">
          {project.longDescription}
        </DialogDescription>
      </DialogHeader>
      <div className="mt-6">
        <h4 className="font-semibold text-olive-900 mb-2">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-olive-100 text-olive-800 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-olive-700 hover:text-olive-900 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span>View code</span>
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-olive-700 hover:text-olive-900 transition-colors"
          >
            <ExternalLink className="h-5 w-5" />
            <span>Live demo</span>
          </a>
        )}
      </div>
    </DialogContent>
  );
}

const Projects = () => {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-24 sm:py-28 bg-olive-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          variants={fadeUp}
          className="mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-olive-600 mb-3">
            Selected work
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-olive-900">
            Projects
          </h2>
          <p className="mt-4 text-olive-700 max-w-xl">
            A mix of client work, school projects, and game jam wins
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 auto-rows-fr"
        >
          <ProjectCard project={featured} featured />
          {rest.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
