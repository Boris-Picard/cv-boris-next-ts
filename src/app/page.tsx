"use client";

import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <div className="flex flex-col overflow-x-hidden">
        {/* About */}
        <section id="about" className="flex flex-col gap-4 sm:py-32 py-16">
          <About />
        </section>
        {/* Projects */}
        <section id="projects" className="flex flex-col gap-4 sm:py-32 py-16">
          <Projects />
        </section>
        {/* Contact */}
        <section id="contact" className="flex flex-col gap-4 sm:py-32 py-16">
          <Contact />
        </section>
      </div>
    </>
  );
}
