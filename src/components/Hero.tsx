"use client"

import * as React from "react"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "./ui/container"

export function Hero() {
  return (
    <section id="home" className="relative aspect-[21/9] flex items-center justify-center overflow-hidden">
      {/* Background with light/dark mode support */}
      <div className="absolute h-full inset-0">
        {/* Light mode background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat dark:hidden"
          style={{
            backgroundImage: "url('/hero_section/sunset_horizon.png')"
          }}
        />
        {/* Dark mode background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden dark:block"
          style={{
            backgroundImage: "url('/hero_section/desert_mirage.png')"
          }}
        />
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-background/60 dark:bg-background/70 backdrop-blur-[1px]" />
      </div>

      {/* Glass morphism background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/20 dark:bg-primary/10 backdrop-blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/20 dark:bg-accent/10 backdrop-blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-secondary/10 dark:bg-secondary/5 backdrop-blur-3xl animate-pulse delay-2000" />
      </div>

      <Container className="relative z-10">
        <div className="text-center">
          {/* Profile image with glass morphism */}


          {/* Glass morphism content container */}
          <div className="backdrop-blur-md bg-background/40 dark:bg-background/30 rounded-3xl border border-white/20 dark:border-white/10 shadow-2xl p-8 md:p-12 mx-auto max-w-4xl">
            {/* Main heading */}
            <div className="grid grid-cols-[1fr_64px] md:grid-cols-[1fr_128px] items-center gap-4 md:gap-8 justify-between">
              
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                <span className="block">Hi, I&apos;m</span>
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Prashant Chouhan
                </span>
              </h1>
              <div className="">
                <div className="mx-auto w-16 h-16 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary to-accent shadow-2xl shadow-primary/25 flex items-center justify-center text-4xl font-bold text-primary-foreground backdrop-blur-sm border border-white/20">
                  PC
                </div>
              </div>
            </div>

            {/* Subtitle */}
            <p className="mt-6 text-xl text-muted-foreground sm:text-2xl font-semibold">
              Full Stack Developer | 3+ Years Experience | Next.js, Node.js, AWS
            </p>

            {/* Description */}
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Specializing in B2B solutions with expertise in Next.js, Node.js, and AWS integrations.
              Developed 80+ projects including real-time systems, payment gateways, and API-driven platforms.
              Passionate about creating scalable, high-performance applications.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="group backdrop-blur-sm bg-primary/90 hover:bg-primary">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="group backdrop-blur-sm border-white/20">
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex justify-center space-x-6">
              <a
                href="#"
                className="backdrop-blur-sm bg-white/10 dark:bg-black/10 p-3 rounded-full border border-white/20 dark:border-white/10 text-muted-foreground hover:text-primary transition-all transform hover:scale-110 hover:bg-white/20"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="backdrop-blur-sm bg-white/10 dark:bg-black/10 p-3 rounded-full border border-white/20 dark:border-white/10 text-muted-foreground hover:text-primary transition-all transform hover:scale-110 hover:bg-white/20"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="backdrop-blur-sm bg-white/10 dark:bg-black/10 p-3 rounded-full border border-white/20 dark:border-white/10 text-muted-foreground hover:text-primary transition-all transform hover:scale-110 hover:bg-white/20"
              >
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground backdrop-blur-sm bg-white/10 dark:bg-black/10 p-2 rounded-full" />
          </div>
        </div>
      </Container>
    </section>
  )
}