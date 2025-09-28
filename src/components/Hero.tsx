"use client"

import * as React from "react"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "./ui/container"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-secondary/5 blur-3xl animate-pulse delay-2000" />
      </div>

      <Container className="relative z-10">
        <div className="text-center">
          {/* Profile image placeholder */}
          <div className="mb-8">
            <div className="mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/25 flex items-center justify-center text-4xl font-bold text-primary-foreground">
              P
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            <span className="block">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Prashant
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground sm:text-2xl">
            MERN Stack Developer & UI/UX Designer
          </p>

          {/* Description */}
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Passionate about creating beautiful, functional, and user-friendly applications 
            that make a difference. I love turning complex problems into simple, elegant solutions.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group">
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Get in Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
            >
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </Container>
    </section>
  )
}
