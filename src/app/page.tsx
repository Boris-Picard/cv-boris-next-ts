import { SparklesPreview } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <div className="flex flex-col overflow-x-hidden">
        {/* Hero */}
        <header className="flex flex-col sm:flex-row h-screen min-w-full justify-center items-center gap-4 mt-16">
          <SparklesPreview />
        </header>
        {/* About */}
        <section className="flex flex-col items-start justify-start gap-4 sm:py-32 py-16"></section>
        {/* Experience */}
        <section
          id="experiences"
          className="flex flex-col items-start justify-start gap-4 sm:py-32 sm:mx-24 md:mx-32 lg:mx-64 xl:mx-96 py-16"
        ></section>
        {/* Projects */}
        <section
          id="projects"
          className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16"
        ></section>
        {/* Skills */}
        <section
          id="skills"
          className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16"
        ></section>
        {/* Contact */}
        <section
          id="contact"
          className="flex flex-col items-center justify-center gap-4 sm:py-48 py-24"
        ></section>
      </div>
    </>
  );
}
