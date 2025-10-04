"use client"

import * as React from "react"
import { Code, Database, Layout, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/container"

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, Next.js, EJS, jQuery, TypeScript, Tailwind CSS",
    color: "text-primary",
  },
  {
    icon: Database,
    title: "Backend Development", 
    description: "Node.js, Express.js, MongoDB, PostgreSQL, MERN Stack",
    color: "text-accent",
  },
  {
    icon: Layout,
    title: "UI/UX Development",
    description: "Component development, Interactive interfaces, Responsive design",
    color: "text-secondary",
  },
  {
    icon: Zap,
    title: "Full Stack Solutions",
    description: "MERN & Next.js applications, Performance optimization",
    color: "text-primary",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-stack developer specializing in building modern web applications with MERN and Next.js
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              With over 3 years of experience in web development, I specialize in building 
              modern, scalable applications using both MERN stack and Next.js. I have strong 
              expertise in frontend technologies including EJS, jQuery, React, and Next.js, 
              with a focus on creating interactive and responsive user interfaces.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              As a UI/UX Developer, I bridge the gap between design and implementation, 
              transforming design concepts into functional, high-performance web applications 
              with clean code and optimal user experiences.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">What I Do</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Full-stack development with MERN & Next.js
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                  Frontend development using EJS, jQuery, and modern frameworks
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3" />
                  UI/UX development and component implementation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Responsive web applications and performance optimization
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card key={skill.title} className="group hover:shadow-lg transition-shadow border-border/50">
                <CardHeader className="pb-3">
                  <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <skill.icon className={`h-6 w-6 ${skill.color}`} />
                  </div>
                  <CardTitle className="text-lg">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-muted-foreground">
                    {skill.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}