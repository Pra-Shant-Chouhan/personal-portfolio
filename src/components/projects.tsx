"use client"

import * as React from "react"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/api/placeholder/400/240",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/api/placeholder/400/240",
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current weather conditions and forecasts with beautiful visualizations and charts.",
    technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com", 
    image: "/api/placeholder/400/240",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="group hover:shadow-xl transition-all duration-300 border-border/50 overflow-hidden">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-muted-foreground">Project Image</span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-2 pt-0">
                <Button variant="outline" size="sm" className="flex-1 group/btn">
                  <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                  Code
                </Button>
                <Button size="sm" className="flex-1 group/btn">
                  <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                  Live Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  )
}
