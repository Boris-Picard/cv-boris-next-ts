import About from "@/components/About";

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
        {/* Projects */}
        <section
          id="projects"
          className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16 min-h-screen"
        ></section>
        {/* Skills */}
        <section
          id="skills"
          className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16 min-h-screen"
        ></section>
        {/* Contact */}
        <section
          id="contact"
          className="flex flex-col items-center justify-center gap-4 sm:py-48 py-24 min-h-screen"
        ></section>
      </div>
    </>
  );
}
