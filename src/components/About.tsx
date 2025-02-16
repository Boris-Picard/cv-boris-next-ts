"use client";
import Image from "next/image";
import Experiences from "./Experiences";
import { Linkedin, Mail } from "lucide-react";
import pp from "../../public/assets/PP.jpg"

export default function About() {
  return (
    <>
      <div className="flex lg:md:mb-12">
        <span className="lg:md:w-16 rounded-full hidden lg:md:block h-4 bg-primary border-0 self-center" />
        <h2 className="uppercase text-4xl lg:text-7xl mx-auto lg:md:mx-16 lg:md:text-start text-center font-black tracking-wide dark:text-white">
          A propos.
        </h2>
      </div>
      <div className="lg:md:flex flex-row flex-1">
        <div className="flex-1 text-start ">
          <p className="lg:md:text-md font-medium leading-relaxed mb-4">
            Bonjour ! Je suis Boris, un passionné du numérique et des jeux vidéo
            basé à Amiens. Titulaire d'un diplôme en développement web, je me
            perfectionne actuellement dans des technologies telles que{" "}
            <span className="text-primary font-bold">React,</span>{" "}
            <span className="text-primary font-bold">Next.js,</span>{" "}
            <span className="text-primary font-bold">Node.js</span> et{" "}
            <span className="text-primary font-bold">MongoDB.</span>
          </p>
          <p className="lg:md:text-md font-medium leading-relaxed mb-4">
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
          <p className="lg:md:text-md font-medium leading-relaxed mb-12">
            Mon objectif est de devenir développeur{" "}
            <span className="text-primary font-bold">full-stack</span> capable
            de concevoir des sites web à la fois fonctionnels et esthétiquement
            attrayants. Ma capacité à m'adapter rapidement, acquise grâce à mon
            expérience antérieure dans les jeux vidéo, constitue un atout
            précieux dans mon parcours. Je suis enthousiaste à l'idée de mettre
            en pratique mes compétences et de poursuivre mon évolution en tant
            que développeur.
          </p>
          <Experiences />
        </div>
        <div className="flex flex-1 flex-col justify-center lg:md:items-end items-center sm:mt-4">
          <Image
            src={pp}
            alt="Profil Picture"
            className="rounded-3xl z-50 object-cover"
            unoptimized
            width={450}
            height={450}
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />
          <div className="flex flex-col w-[450px]">
            <div className="flex mt-4">
              <span className="lg:md:w-14 rounded-full hidden lg:md:block h-2 bg-primary border-0 self-center" />
              <h3 className="uppercase lg:md:text-2xl text-xl mx-auto lg:md:mx-16 lg:md:text-start text-center font-extrabold tracking-wide dark:text-white">
                Me contacter.
              </h3>
            </div>
            <div className="flex my-4 justify-center lg:md:justify-start space-x-3">
              <a
                aria-label="Mail"
                href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%68%65%6C%6C%6F%40%62%6F%72%69%73%2D%70%69%63%61%72%64%2E%66%72"
                className="hover:text-primary dark:hover:text-primary dark:text-white hover:shadow-0 cursor-pointer"
              >
                <Mail />
              </a>
              <a
                aria-label="Linkedin"
                href="https://www.linkedin.com/in/boris-picard-2906029b/"
                target="_blank"
                className="hover:text-primary dark:hover:text-primary dark:text-white hover:shadow-0 cursor-pointer"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
