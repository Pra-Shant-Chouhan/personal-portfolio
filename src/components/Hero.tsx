
import * as React from "react"
import { ArrowDown, Download, Eye, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "./ui/container"
import {
  TypographyH1,
  TypographyH4,
  TypographyLead,
  TypographyMuted,
  TypographyP,
} from "@/components/ui/typography"
import { CtaButtons } from "./CtaButtons"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen py-4 flex items-center justify-center overflow-hidden">
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
        <header className="backdrop-blur-md bg-background/40 dark:bg-background/30 rounded-3xl border border-white/20 dark:border-white/10 shadow-2xl p-6 md:p-10 lg:p-12 mx-auto max-w-7xl">

          {/* Profile + Name */}
          <div className="grid grid-cols-[1fr_64px] md:grid-cols-[1fr_128px] items-center gap-4 md:gap-8 justify-between">
            <div className="text-left">
              <TypographyLead className="text-base md:text-lg lg:text-xl font-medium text-muted-foreground mb-2">
                Hi, I&apos;m
              </TypographyLead>
              <TypographyH1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Prashant Chouhan
                </span>
              </TypographyH1>
            </div>

            <figure className="mx-auto w-16 h-16 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-primary to-accent shadow-2xl shadow-primary/25 flex items-center justify-center text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground border-2 border-white/30 backdrop-blur-sm overflow-hidden">
              {/* If image is present */}
              {/* <img src="/profile.jpg" alt="Prashant Chouhan" className="w-full h-full object-cover" /> */}
              {/* Fallback initials */}
              <figcaption className="sr-only">PC</figcaption>
              PC
            </figure>
          </div>

          {/* Subtitle */}
          <TypographyH4 className="mt-6 md:mt-8">
            Full Stack Developer | 3+ Years Experience |{" "}
            <span className="text-foreground/90">Next.js · EJS · jQuery · Node.js · Express.js · AWS</span>
          </TypographyH4>

          {/* Description */}
          <div className="mt-6 md:mt-8 space-y-4">
            <TypographyLead className="">
              At <strong className="text-foreground font-semibold">Triggers Web Solution</strong>, I build end-to-end full-stack applications with dynamic front-ends using{" "}
              <strong className="text-foreground/90">Next.js, EJS, and jQuery</strong>, and scalable backends powered by{" "}
              <strong className="text-foreground/90">Node.js, Express.js, and MongoDB</strong>, deployed securely on{" "}
              <strong className="text-foreground/90">AWS</strong>.
            </TypographyLead>

            <TypographyP className="">
              With <strong className="text-foreground font-semibold">80+ completed projects</strong> spanning ticket booking systems, e-commerce platforms, education portals, construction management tools, and finance applications, I deliver <strong className="text-foreground/90">secure, high-performance, and user-friendly solutions</strong> that drive business growth.
            </TypographyP>
          </div>

          {/* CTA Buttons */}
          <CtaButtons />
          {/* Social Links */}
          <div className="mt-8 md:mt-10 flex justify-center gap-3 md:gap-4">
            {/* GitHub */}
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="group w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 dark:bg-black/5 border border-white/20 dark:border-white/10 text-muted-foreground hover:text-white hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-900 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm"
            >
              <a href="https://github.com/Pra-Shant-Chouhan" rel="nofollow noopener noreferrer" aria-label="GitHub">
                <Github className="h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
              </a>
            </Button>

            {/* LinkedIn */}
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="group w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 dark:bg-black/5 border border-white/20 dark:border-white/10 text-muted-foreground hover:text-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm"
            >
              <a href="https://www.linkedin.com/in/prashant-chouhan-a94556186" target="_blank" aria-label="LinkedIn" rel="nofollow noopener noreferrer">
                <Linkedin className="h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
              </a>
            </Button>

            {/* Stack Overflow */}
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="group w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 dark:bg-black/5 border border-white/20 dark:border-white/10 text-muted-foreground hover:text-white hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm"
            >
              <a href="https://stackoverflow.com/users/15393021/prashant-chouhan" aria-label="Stack Overflow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" className="h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform">
                  <path d="M291 311l-195.7-41.3-8.2 39.3 195.7 41 8.2-39zm51-87L188.5 95.7 163 126.5 316.5 254.8 342 224zm-31.2 39.7L129.5 179 112.8 215.5 294 300 310.8 263.7zM262.3 32l-32 24 119.3 160.3 32-24-119.3-160.3zm20.5 328l-200 0 0 39.7 200 0 0-39.7zm39.7 80l-279.5 0 0-120-40 0 0 160 359.5 0 0-160-40 0 0 120z" />
                </svg>
              </a>
            </Button>

            {/* Email */}
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="group w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 dark:bg-black/5 border border-white/20 dark:border-white/10 text-muted-foreground hover:text-white hover:bg-gradient-to-br hover:from-red-500 hover:to-red-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm"
            >
              <a href="mailto:pchouhan122@gmail.com" aria-label="Email">
                <Mail className="h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Scroll Indicator
          <div className="mt-12 md:mt-16 animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 text-muted-foreground hover:text-primary hover:bg-white/20 backdrop-blur-sm transition-all"
              aria-label="Scroll down"
            >
              <ArrowDown className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div> */}
        </header>
      </Container>
    </section>
  )
}