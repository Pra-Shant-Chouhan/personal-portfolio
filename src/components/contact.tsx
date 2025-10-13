"use client"

import * as React from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { ContactForm } from "./contactForm/ContactForm"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "pchouhan122@gmail.com",
    href: "mailto:pchouhan122@gmail.com",
  },
  // {
  //   icon: Phone,
  //   label: "Phone",
  //   value: "+1 (555) 123-4567",
  //   href: "tel:+15551234567",
  // },
  {
    icon: MapPin,
    label: "Location",
    value: "Mandleshwar, Madhya Pradesh ,India",
    href: "#",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Let&apos;s Start a Conversation
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I&apos;m always interested in hearing about new projects and opportunities. 
                Whether you&apos;re a company looking to hire, or you&apos;re a fellow developer 
                wanting to collaborate, I&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <p className="text-muted-foreground mb-4">
                Follow me on social media for updates and insights:
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  GitHub
                </Button>
                <Button variant="outline" size="sm">
                  Twitter
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <ContactForm />
          </Card>
        </div>
      </Container>
    </section>
  )
}
