"use client"

import * as React from "react"
import { ArrowDown, Download, Eye, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "./ui/container"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat dark:hidden"
          style={{ backgroundImage: "url('/hero_section/sunset_horizon.webp')" }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden dark:block"
          style={{ backgroundImage: "url('/hero_section/desert_mirage.webp')" }}
        />
        <div className="absolute inset-0 bg-background/60 dark:bg-background/70 backdrop-blur-[1px]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/20 dark:bg-primary/10 backdrop-blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/20 dark:bg-accent/10 backdrop-blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-secondary/10 dark:bg-secondary/5 backdrop-blur-3xl animate-pulse delay-2000" />
      </div>

      <Container className="relative z-10 text-center">
        <header className="backdrop-blur-md bg-background/40 dark:bg-background/30 rounded-3xl border border-white/20 dark:border-white/10 shadow-2xl p-6 md:p-10 lg:p-12 mx-auto max-w-4xl">

          {/* Profile + Name */}
          <div className="grid grid-cols-[1fr_64px] md:grid-cols-[1fr_128px] items-center gap-4 md:gap-8 justify-between">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              <span className="block">Hi, I&apos;m</span>
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Prashant Chouhan
              </span>
            </h1>

            <figure className="mx-auto w-16 h-16 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary to-accent shadow-2xl shadow-primary/25 flex items-center justify-center text-4xl font-bold text-primary-foreground border-2 border-white/30 backdrop-blur-sm overflow-hidden">
              {/* If image is present */}
              {/* <img src="/profile.jpg" alt="Prashant Chouhan" className="w-full h-full object-cover" /> */}
              {/* Fallback initials */}
              <figcaption className="sr-only">PC</figcaption>
              PC
            </figure>
          </div>

          {/* Subtitle */}
          <p className="mt-6 text-xl text-muted-foreground sm:text-2xl font-semibold">
            Full Stack Developer | 3+ Years Experience | Next.js · EJS · jQuery · Node.js · Express.js · AWS
          </p>

          {/* Description */}
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            At <strong>Triggers Web Solution</strong>, I built end-to-end full-stack applications with dynamic front-ends using Next.js, EJS, and jQuery,
            and scalable backends powered by Node.js, Express.js, and MongoDB, deployed securely on AWS.
            Over 80+ projects, including ticket booking systems, e-commerce platforms, education portals,
            construction management tools, and finance applications, I delivered secure, high-performance,
            and user-friendly solutions that drive business growth.
          </p>


          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              asChild
              className="group px-6 py-3 h-auto rounded-xl bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <a href="/resume/Prashant_Chouhan_Resume.pdf" download>
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce transition-transform" />
                Download Resume
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="group px-6 py-3 h-auto rounded-xl border-2 border-primary/20 bg-background/40 hover:bg-primary/10 hover:border-primary/30 text-foreground font-medium backdrop-blur-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg hover:text-foreground/80"
            >
              <a href="/resume/Prashant_Chouhan_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Eye className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                View Resume
                <ExternalLink className="ml-2 h-3 w-3 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="group px-6 py-3 h-auto rounded-xl border-2 border-accent/20 bg-background/40 hover:bg-accent/10 hover:border-accent/30 text-foreground font-medium backdrop-blur-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg hover:text-foreground/80"
            >
              <a href="mailto:pchouhan122@gmail.com">
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Get in Touch
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex justify-center gap-4">
            {/* GitHub */}
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="group w-12 h-12 rounded-2xl bg-white/5 dark:bg-black/5 border border-white/20 dark:border-white/10 text-muted-foreground hover:text-white hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-900 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm"
            >
              <a href="#" aria-label="GitHub">
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </Button>

            {/* LinkedIn */}
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="group w-12 h-12 rounded-2xl bg-white/5 dark:bg-black/5 border border-white/20 dark:border-white/10 text-muted-foreground hover:text-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm"
            >
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </Button>

            {/* Stack Overflow */}
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="group w-12 h-12 rounded-2xl bg-white/5 dark:bg-black/5 border border-white/20 dark:border-white/10 text-muted-foreground hover:text-white hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm"
            >
              <a href="#" aria-label="Stack Overflow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" className="h-5 w-5 group-hover:scale-110 transition-transform"  ><path d="M291 311l-195.7-41.3-8.2 39.3 195.7 41 8.2-39zm51-87L188.5 95.7 163 126.5 316.5 254.8 342 224zm-31.2 39.7L129.5 179 112.8 215.5 294 300 310.8 263.7zM262.3 32l-32 24 119.3 160.3 32-24-119.3-160.3zm20.5 328l-200 0 0 39.7 200 0 0-39.7zm39.7 80l-279.5 0 0-120-40 0 0 160 359.5 0 0-160-40 0 0 120z" /></svg>
              </a>
            </Button>

            {/* Email */}
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="group w-12 h-12 rounded-2xl bg-white/5 dark:bg-black/5 border border-white/20 dark:border-white/10 text-muted-foreground hover:text-white hover:bg-gradient-to-br hover:from-red-500 hover:to-red-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm"
            >
              <a href="mailto:pchouhan122@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          {/* <div className="mt-16 animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-full bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 text-muted-foreground hover:text-primary hover:bg-white/20 backdrop-blur-sm transition-all"
            >
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div> */}
        </header>
      </Container>
    </section>
  )
}