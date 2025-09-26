import { Hero } from "@/components/Hero";
import { Metadata } from "next";
// import { Hero } from "@/components/hero";
// import { Projects } from "@/components/projects";
// import { About } from "@/components/about";
// import { Contact } from "@/components/contact";

export const metadata: Metadata = {
  title: "Prashant | MERN Developer",
  description: "Portfolio website showcasing projects and blogs.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-amber-300 ">
      <Hero />
      {/* <About />
      <Projects />
      <Contact /> */}
    </main>
  );
}
