"use client"

import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type Project = {
  title: string
  description: string
  image: string
  longDescription?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    "title": "Webservice for KSKcolle",
    "description": "A modern website for KSKcolle, a chess club, featuring tournament management, player administration, and an up-to-date calendar.",
    "longDescription": "This website is a complete overhaul for KSKcolle, a chess club that previously relied on an outdated website. The new website includes a backend built with Koa, making it easy to manage tournaments, players, and the calendar. The frontend, developed in NextJS, offers a warm and modern design that is user-friendly and easy to navigate. The goal was to create an intuitive experience for both members and visitors.",
    "image": "/projects/kskcolle.png",
    "technologies": ["NextJS", "Koa", "Node.js", "MySQL", "React", "TailwindCSS", "TypeScript"],
    "githubUrl": "https://github.com/Jessevdonck/KSKColle",
    "liveUrl": "https://frontendweb-kskcolle.onrender.com/"
  },
  {
    "title": "Kingdomino",
    "description": "A digitalized version of the popular board game Kingdomino, developed as a group project during my first year of college.",
    "longDescription": "This project marked my first experience developing a complete project in Java. The goal was to create a digital version of the board game Kingdomino, using JavaFX for the graphical interface and MySQL for storing game data. The project required strong teamwork and a structured approach to translate the complexity of the game into a functional application. This project significantly improved my foundational knowledge of Java, object-oriented programming, and database management.",
    "image": "/projects/kingdomino.jpg",
    "technologies": ["Java", "JavaFX", "MySQL"],
    "githubUrl": "https://github.com/Jessevdonck/Kingdomino",
    },
    {
      "title": "Personal Portfolio",
      "description": "A modern personal portfolio website to showcase my projects and skills, built with Next.js and featuring a contact form powered by Resend.",
      "longDescription": "This portfolio website was developed to present my work and skills in a clean and professional manner. Built with Next.js, it offers a fast and responsive user experience. The contact form is integrated with Resend, allowing visitors to send messages directly to my email. The project highlights my ability to work with modern web technologies, including React, TailwindCSS, and TypeScript, while also demonstrating my attention to design and user experience.",
      "image": "/projects/portfolio.png",
      "technologies": ["Next.js", "React", "TailwindCSS", "TypeScript", "Resend"],
      "githubUrl": "https://github.com/Jessevdonck/Portfolio2025",
      "liveUrl": "https://jessevdonck.com"
    }
]

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={2000}
            height={1000}
            className="w-full h-48 object-cover"
            quality={100}
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-olive-900 mb-2">{project.title}</h3>
            <p className="text-olive-700">{project.description}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl text-olive-900">{project.title}</DialogTitle>
          <DialogDescription className="text-olive-700 mt-4">{project.longDescription}</DialogDescription>
        </DialogHeader>
        <div className="mt-6">
          <h4 className="font-semibold text-olive-900 mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-olive-100 text-olive-800 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6 flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-olive-700 hover:text-olive-900 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>View Code</span>
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
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-olive-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-olive-900 mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

