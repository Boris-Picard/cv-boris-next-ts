"use client";
import Image from "next/image";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Skills from "./Skills";
import { Separator } from "./ui/separator";

export default function About() {
  return (
    <>
      <div className="flex lg:md:mb-12">
        <span className="lg:md:w-16 rounded-full w-0 h-4 bg-primary border-0 self-center" />
        <h2 className="uppercase text-4xl lg:text-7xl mx-16 lg:md:text-start text-center font-black tracking-wide dark:text-white">
          A propos
        </h2>
      </div>
      <div className="lg:md:flex flex-row flex-1 gap-16">
        <div className="flex-1">
          <p className="text-lg font-medium leading-relaxed mb-4">
            Bonjour, je suis Boris, passionné par le numérique et les jeux vidéo
            à Amiens. Diplômé en développement web, j'apprends actuellement{" "}
            <span className="text-primary font-bold">React,</span>{" "}
            <span className="text-primary font-bold">Next.js,</span>{" "}
            <span className="text-primary font-bold">Node.js</span> et{" "}
            <span className="text-primary font-bold">MongoDB.</span>
          </p>
          <p className="text-lg font-medium leading-relaxed mb-4">
            J'ai acquis des compétences en{" "}
            <span className="text-primary font-bold">HTML,</span>{" "}
            <span className="text-primary font-bold">CSS,</span>{" "}
            <span className="text-primary font-bold">JavaScript,</span>{" "}
            <span className="text-primary font-bold">PHP,</span>{" "}
            <span className="text-primary font-bold">MySQL</span> et en{" "}
            <span className="text-primary font-bold">
              programmation orientée objet.
            </span>
          </p>
          <p className="text-lg font-medium leading-relaxed mb-4">
            Mon objectif est de devenir développeur{" "}
            <span className="text-primary font-bold">full-stack</span> pour
            créer des sites web fonctionnels et esthétiquement plaisants. Mon
            expérience antérieure dans les jeux vidéo m'a appris à m'adapter
            rapidement. Je suis impatient de mettre mes compétences en pratique
            et de continuer à évoluer en tant que développeur.
          </p>
          <Separator className="my-4" />
          <Skills />
        </div>
        <div className="flex-1">
          <AspectRatio className="lg:md:justify-self-end" ratio={16 / 9}>
            <Image
              src="/img/PP.jpg"
              alt="Profil Picture"
              className="rounded-3xl object-cover"
              width={450}
              height={450}
              loading="lazy"
            />
          </AspectRatio>
        </div>
      </div>
    </>
  );
}
