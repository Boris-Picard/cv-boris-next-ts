"use client";
import Image from "next/image";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Skills from "./Skills";
import Experiences from "./Experiences";
import { Github, Linkedin, Mail } from "lucide-react";

export default function About() {
  return (
    <>
      <div className="flex lg:md:mb-12">
        <span className="lg:md:w-16 rounded-full hidden lg:md:block h-4 bg-primary border-0 self-center" />
        <h2 className="uppercase text-4xl lg:text-7xl mx-auto lg:md:mx-16 lg:md:text-start text-center font-black tracking-wide dark:text-white">
          A propos.
        </h2>
      </div>
      <div className="lg:md:flex flex-row flex-1 gap-16">
        <div className="flex-1 text-start ">
          <p className="lg:md:text-lg font-medium leading-relaxed mb-4">
            Bonjour, je suis Boris, passionné par le numérique et les jeux vidéo
            à Amiens. Diplômé en développement web, j'apprends actuellement{" "}
            <span className="text-primary font-bold">React,</span>{" "}
            <span className="text-primary font-bold">Next.js,</span>{" "}
            <span className="text-primary font-bold">Node.js</span> et{" "}
            <span className="text-primary font-bold">MongoDB.</span>
          </p>
          <p className="lg:md:text-lg font-medium leading-relaxed mb-4">
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
          <p className="lg:md:text-lg font-medium leading-relaxed mb-4">
            Mon objectif est de devenir développeur{" "}
            <span className="text-primary font-bold">full-stack</span> pour
            créer des sites web fonctionnels et esthétiquement plaisants. Mon
            expérience antérieure dans les jeux vidéo m'a appris à m'adapter
            rapidement. Je suis impatient de mettre mes compétences en pratique
            et de continuer à évoluer en tant que développeur.
          </p>
          <Experiences />
        </div>
        <div className="flex-1 flex">
          <AspectRatio
            className="lg:md:justify-self-end justify-self-center"
            ratio={16 / 9}
          >
            <Image
              src="/img/PP.jpg"
              alt="Profil Picture"
              className="rounded-3xl object-cover"
              width={450}
              height={450}
              loading="lazy"
            />
            <div className="flex items-center mt-4">
              <span className="lg:md:w-14 rounded-full hidden lg:md:block h-2 bg-primary border-0 self-center" />
              <h3 className="uppercase lg:md:text-2xl text-xl mx-auto lg:md:mx-16 lg:md:text-start text-center font-extrabold tracking-wide dark:text-white">
                Me contacter.
              </h3>
            </div>
            <div className="flex flex-row my-4 justify-center lg:md:justify-start space-x-3">
              <a
                href="https://www.linkedin.com/in/boris-picard-2906029b/"
                target="_blank"
                className="hover:text-primary dark:hover:text-primary dark:text-white hover:shadow-0 cursor-pointer"
              >
                <Linkedin />
              </a>
              <a
                href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%68%65%6C%6C%6F%40%62%6F%72%69%73%2D%70%69%63%61%72%64%2E%66%72"
                className="hover:text-primary dark:hover:text-primary dark:text-white hover:shadow-0 cursor-pointer"
              >
                <Mail />
              </a>
            </div>
          </AspectRatio>
        </div>
      </div>
    </>
  );
}
