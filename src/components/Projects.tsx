"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Badge } from "./ui/badge";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Github, Link, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import IconLink from "./Link";

export default function Projects() {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <>
      <div className="flex lg:md:mb-12">
        <span className="lg:md:w-16 rounded-full hidden lg:md:block h-4 bg-primary border-0 self-center" />
        <h2 className="uppercase text-4xl lg:text-7xl mx-auto lg:md:mx-16 lg:md:text-start text-center font-black tracking-wide dark:text-white">
          projets.
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 flex items-start flex-wrap h-full">
          <div className="flex items-center">
            <span className="text-primary font-bold text-xl">01.</span>
            <h3 className="uppercase lg:md:text-2xl text-xl lg:mx-3 lg:text-start text-center font-extrabold tracking-wide dark:text-white">
              Blazerifle
            </h3>
            {/* <Separator className="my-4 border" /> */}
          </div>
          <p className="text-base leading-relaxed font-semibold">
            Projet pour l'obtention du titre RNCP Niveau 5 "Développeur Web et
            Web Mobile" : Maquette Figma, MERISE, MySQL, PHP. Gestion complète
            des utilisateurs, articles, commentaires, favoris. Sécurité
            renforcée : validation d'email (JWT), hashage des mots de passe,
            RGPD. Utilisation de singleton et transactions pour la sécurité des
            opérations sur la base de données. SEO optimisé, respect des normes
            W3C. Mise en ligne sur Hostinger.
          </p>
          <div className="flex space-x-3">
            <Badge variant="secondary">HTML</Badge>
            <Badge variant="secondary">CSS</Badge>
            <Badge variant="secondary">Javascript</Badge>
            <Badge variant="secondary">PHP</Badge>
            <Badge variant="secondary">MySql</Badge>
            <Badge variant="secondary">POO</Badge>
          </div>
          <div className="flex justify-between">
            <IconLink href="/" icon="Link">
              Linkedin
              {/* <span className="mx-2 font-semibold">Website</span> */}
            </IconLink>
            {/* <Link>
              <Github />
              <span className="mx-2 font-semibold">Code</span>
            </Link> */}
          </div>
        </div>
        <div className="col-span-1 overflow-hidden rounded-3xl">
          <div
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
          >
            <AspectRatio ratio={3 / 2}>
              <Image
                src={"/img/blazerifle-preview.png"}
                fill={true}
                quality={75}
                alt="blazerifle website"
                className={`object-cover rounded-3xl transition-all duration-500  ${
                  mouseOver ? "scale-110" : ""
                }`}
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </>
  );
}
