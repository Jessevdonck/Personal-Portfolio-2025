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
import projects from "../data/projects"

type Project = {
  title: string
  description: string
  image: string
  longDescription?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}



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

