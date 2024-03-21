"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Badge } from "./ui/badge";
import { Github, Link, Linkedin } from "lucide-react";
import IconLink from "./Link";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

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
      <Card className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 flex flex-wrap">
          <CardHeader>
            <div className="flex items-center">
              <span className="text-primary font-bold text-xl">01.</span>
              <h3 className="uppercase lg:md:text-2xl text-xl lg:mx-3 lg:text-start text-center font-extrabold tracking-wide dark:text-white">
                Blazerifle
              </h3>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-base leading-relaxed font-medium">
              Projet pour l'obtention du titre RNCP Niveau 5 "Développeur Web et
              Web Mobile" : Maquette Figma, MERISE, MySQL, PHP. Gestion complète
              des utilisateurs, articles, commentaires, favoris. Sécurité
              renforcée : validation d'email (JWT), hashage des mots de passe,
              RGPD. Utilisation de singleton et transactions pour la sécurité
              des opérations sur la base de données. SEO optimisé, respect des
              normes W3C. Mise en ligne sur Hostinger.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex flex-wrap space-x-3">
              <Badge variant="secondary">HTML</Badge>
              <Badge variant="secondary">CSS</Badge>
              <Badge variant="secondary">Javascript</Badge>
              <Badge variant="secondary">PHP</Badge>
              <Badge variant="secondary">MySql</Badge>
              <Badge variant="secondary">POO</Badge>
            </div>
            <div className="flex justify-between  space-x-3">
              <IconLink href="/" icon="Link">
                Voir le site
              </IconLink>
              <IconLink href="/" icon="Github">
                code
              </IconLink>
            </div>
          </CardFooter>
        </div>
        <div
          className="lg:w-1/2 overflow-hidden rounded-3xl"
          onMouseEnter={() => setMouseOver(true)}
          onMouseLeave={() => setMouseOver(false)}
        >
          <AspectRatio ratio={16 / 9}>
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
      </Card>
    </>
  );
}
