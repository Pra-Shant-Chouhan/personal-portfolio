"use client"

import * as React from "react"
import { Code, Database, Palette, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/container"

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, Tailwind CSS",
    color: "text-primary",
  },
  {
    icon: Database,
    title: "Backend Development", 
    description: "Node.js, Express.js, MongoDB, PostgreSQL",
    color: "text-accent",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Adobe XD, User-centered design",
    color: "text-secondary",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimization, SEO, Web Vitals",
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
            I'm a passionate developer who loves creating digital experiences that matter
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              With over 3 years of experience in web development, I specialize in building 
              modern, scalable applications using the MERN stack. I have a keen eye for 
              design and believe in creating user experiences that are both beautiful and functional.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing my knowledge through technical writing and mentoring.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">What I Do</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Full-stack web application development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                  UI/UX design and prototyping
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3" />
                  Performance optimization and SEO
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Technical mentoring and consulting
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
