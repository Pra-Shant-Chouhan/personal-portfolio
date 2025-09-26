"use client";
import { useEffect } from "react";
// import gsap from "gsap";
import { TypographyH1, TypographyLead } from "./ui/typography";
import { Container } from "./ui/container";
// import { TypographyH1, TypographyLead } from "@/components/ui/typography";

export function Hero() {
//   useEffect(() => {
//     gsap.from(".hero-title", { opacity: 0, y: 50, duration: 1 });
//     gsap.from(".hero-sub", { opacity: 0, y: 30, delay: 0.5 });
//   }, []);

  return (
    <section className="flex items-center justify-center h-screen">
      <Container>
        <TypographyH1 className="hero-title text-center">
          Hi, I’m Prashant 👋
        </TypographyH1>
        <TypographyLead className="hero-sub text-center mt-4">
          MERN Stack Developer | Building modern web apps
        </TypographyLead>
      </Container>
    </section>
  );
}
