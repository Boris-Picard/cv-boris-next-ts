import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <div className="flex flex-col overflow-x-hidden">
        {/* About */}
        <section
          id="about"
          className="flex flex-col gap-4 sm:py-32 py-16 min-h-screen"
        >
          <About />
        </section>
        {/* Skills */}
        <section
          id="skills"
          className="flex flex-col gap-4 sm:py-32 py-16 min-h-screen"
        >
          <Skills />
        </section>
        {/* Projects */}
        <section
          id="projects"
          className="flex flex-col gap-4 sm:py-32 py-16 min-h-screen"
        ></section>
        {/* Contact */}
        <section
          id="contact"
          className="flex flex-col gap-4 sm:py-32 py-16 min-h-screen"
        ></section>
      </div>
    </>
  );
}
