"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Badge } from "./ui/badge";
import IconLink from "./Link";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";

import gifMyCryptoFolio from "../assets/mycryptofolio.gif";
import gifBlazerifle from "../assets/gif-blazerifle.gif";
import gifRentMyRide from "../assets/gif-rent-my-ride.gif";
import gifReacttasks from "../assets/gif-reacttasks.gif";
import gifCv from "../assets/gif-cv.gif";

export default function Projects() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);

  return (
    <>
      <div className="flex lg:md:mb-12">
        <span className="lg:md:w-16 rounded-full hidden lg:md:block h-4 bg-primary border-0 self-center" />
        <h2 className="uppercase text-4xl lg:text-7xl mx-auto lg:md:mx-16 lg:md:text-start text-center font-black tracking-wide dark:text-white">
          projets.
        </h2>
      </div>

      <Card className="flex flex-col lg:flex-row shadow-lg bg-[#F8F8FF] dark:bg-[#212529] lg:md:mb-10">
        <div className="lg:w-1/2 flex flex-wrap mr-3">
          <CardHeader className="my-3 xl:lg:md:my-0">
            <div className="flex items-center">
              <span className="text-primary font-bold text-xl">01.</span>
              <h3 className="uppercase lg:md:text-2xl text-xl mx-3 lg:text-start text-center font-extrabold tracking-wide dark:text-white">
                myCryptoFolio.
              </h3>
            </div>
          </CardHeader>
          <CardContent className="p-0 mb-3 xl:lg:md:mb-0">
            <p className=" leading-relaxed font-medium py-3 text-balance">
              Développement d'un site de suivi d'investissements en
              cryptomonnaies avec React, Node.js, Express et MongoDB. Gestion
              des utilisateurs (inscription, connexion sécurisée avec JWT et
              cookies, réinitialisation de mot de passe via Nodemailer). Suivi
              en temps réel des prix de plus de 14 000 cryptomonnaies (API
              CoinGecko), calculs dynamiques (coûts, valeurs actuelles, profits
              et pertes). Gestion d'état globale avec Zustand. Sécurité
              renforcée (hachage des mots de passe avec Argon2, limitation des
              requêtes avec express-rate-limit). Tests unitaires (Jest),
              validation des données (Zod, Joi). Déploiement sur Render.com avec
              domaine personnalisé Hostinger.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex flex-wrap gap-3 my-3">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">Express</Badge>
              <Badge variant="secondary">MongoDB</Badge>
              <Badge variant="secondary">JWT</Badge>
              <Badge variant="secondary">Argon2</Badge>
              <Badge variant="secondary">Nodemailer</Badge>
              <Badge variant="secondary">Tailwind </Badge>
              <Badge variant="secondary">Zustand</Badge>
              <Badge variant="secondary">Zod</Badge>
              <Badge variant="secondary">Joi</Badge>
            </div>
            <Separator className=" bg-slate-300 my-4" />
            <div className="flex justify-center lg:justify-start mt-3 lg:mt-0 space-x-3">
              <IconLink href="https://mycryptofolio.site/" icon="Link">
                Voir le site
              </IconLink>
              <IconLink
                href="https://github.com/Boris-Picard/mycryptofolio"
                icon="Github"
              >
                Code (Front)
              </IconLink>
              <IconLink
                href="https://github.com/Boris-Picard/mycryptofolio-backend"
                icon="Github"
              >
                Code (Back)
              </IconLink>
            </div>
          </CardFooter>
        </div>
        <div
          className="lg:w-1/2 overflow-hidden mt-6 lg:mt-0 rounded-3xl flex"
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >
          <AspectRatio ratio={16 / 9}>
            <Image
              src={gifMyCryptoFolio}
              fill={true}
              unoptimized
              quality={75}
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
              alt="myCryptoFolio website"
              className={`object-cover rounded-3xl transition-all duration-500 ${isHovered1 ? "scale-110" : ""
                }`}
            />
          </AspectRatio>
        </div>
      </Card>

      <Card className="flex flex-col lg:flex-row shadow-lg bg-[#F8F8FF] dark:bg-[#212529] lg:md:mb-10">
        <div className="lg:w-1/2 flex flex-wrap mr-3">
          <CardHeader className="my-3 xl:lg:md:my-0">
            <div className="flex items-center">
              <span className="text-primary font-bold text-xl">02.</span>
              <h3 className="uppercase lg:md:text-2xl text-xl mx-3 lg:text-start text-center font-extrabold tracking-wide dark:text-white">
                Blazerifle.
              </h3>
            </div>
          </CardHeader>
          <CardContent className="p-0 mb-3 xl:lg:md:mb-0">
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
            <div className="flex flex-wrap gap-3 my-3">
              <Badge variant="secondary">HTML</Badge>
              <Badge variant="secondary">CSS</Badge>
              <Badge variant="secondary">Bootstrap</Badge>
              <Badge variant="secondary">Javascript</Badge>
              <Badge variant="secondary">PHP</Badge>
              <Badge variant="secondary">MySql</Badge>
              <Badge variant="secondary">POO</Badge>
            </div>
            <Separator className=" bg-slate-300 my-4" />
            <div className="flex justify-center lg:justify-start mt-3 lg:mt-0 space-x-3">
              <IconLink
                href="https://blazerifle.boris-picard.fr/controllers/home-ctrl.php"
                icon="Link"
              >
                Voir le site
              </IconLink>
              <IconLink
                href="https://github.com/Boris-Picard/BlazeRifle"
                icon="Github"
              >
                Code
              </IconLink>
            </div>
          </CardFooter>
        </div>
        <div
          className="lg:w-1/2 overflow-hidden mt-6 lg:mt-0 rounded-3xl flex"
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <AspectRatio ratio={16 / 9}>
            <Image
              src={gifBlazerifle}
              fill={true}
              unoptimized
              quality={75}
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
              alt="Blazerifle website"
              className={`object-cover rounded-3xl transition-all duration-500 ${isHovered2 ? "scale-110" : ""
                }`}
            />
          </AspectRatio>
        </div>
      </Card>

      <Card className="flex flex-col lg:flex-row shadow-lg bg-[#F8F8FF] dark:bg-[#212529] lg:md:mb-10">
        <div className="lg:w-1/2 flex flex-wrap mr-3">
          <CardHeader className="my-3 xl:lg:md:my-0">
            <div className="flex items-center">
              <span className="text-primary font-bold text-xl">03.</span>
              <h3 className="uppercase lg:md:text-2xl text-xl mx-3 lg:text-start text-center font-extrabold tracking-wide dark:text-white">
                Rent my ride.
              </h3>
            </div>
          </CardHeader>
          <CardContent className="p-0 mb-3 xl:lg:md:mb-0">
            <p className="text-base leading-relaxed font-medium">
              Premier projet MERISE, MySQL, PHP : Site location voiture avec
              CRUD complet, tableau de bord, barre de recherche. Sécurité
              renforcée : nettoyage et validation des données côté serveur,
              PHPMailer pour confirmation location. Expérience utilisateur
              fluide et sécurisée.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex flex-wrap gap-3 my-3">
              <Badge variant="secondary">HTML</Badge>
              <Badge variant="secondary">CSS</Badge>
              <Badge variant="secondary">Bootstrap</Badge>
              <Badge variant="secondary">Javascript</Badge>
              <Badge variant="secondary">PHP</Badge>
              <Badge variant="secondary">MySql</Badge>
              <Badge variant="secondary">POO</Badge>
            </div>
            <Separator className=" bg-slate-300 my-4" />
            <div className="flex justify-center lg:justify-start mt-3 lg:mt-0 space-x-3">
              <IconLink
                href="https://github.com/Boris-Picard/rent-my-ride"
                icon="Github"
              >
                Code
              </IconLink>
            </div>
          </CardFooter>
        </div>
        <div
          className="lg:w-1/2 overflow-hidden mt-6 lg:mt-0 rounded-3xl flex"
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
        >
          <AspectRatio ratio={16 / 9}>
            <Image
              src={gifRentMyRide}
              fill={true}
              quality={75}
              unoptimized
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
              alt="Rent my ride website"
              className={`object-cover rounded-3xl transition-all duration-500 ${isHovered3 ? "scale-110" : ""
                }`}
            />
          </AspectRatio>
        </div>
      </Card>

      <Card className="flex flex-col lg:flex-row shadow-lg bg-[#F8F8FF] dark:bg-[#212529] lg:md:mb-10">
        <div className="lg:w-1/2 flex flex-wrap mr-3">
          <CardHeader className="my-3 xl:lg:md:my-0">
            <div className="flex items-center">
              <span className="text-primary font-bold text-xl">04.</span>
              <h3 className="uppercase lg:md:text-2xl text-xl mx-3 lg:text-start text-center font-extrabold tracking-wide dark:text-white">
                reacttasks.
              </h3>
            </div>
          </CardHeader>
          <CardContent className="p-0 mb-3 xl:lg:md:mb-0">
            <p className="text-base leading-relaxed font-medium">
              Projet réalisé avec React dans le cadre de mon apprentissage
              autonome afin d'acquérir les bases essentielles, telles que JSX,
              les composants (fonctionnels et de classe), la distinction entre
              les props et l'état, la gestion des événements, les listes et les
              clés, les composants de haute ordre, ainsi que les hooks
              (useState, useEffect, etc.). Utilisation de Tailwind CSS pour le
              stylisme et intégration d'une bibliothèque de composants UI avec
              Next UI.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex flex-wrap gap-3 my-3">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Tailwind</Badge>
              <Badge variant="secondary">NextUI</Badge>
            </div>
            <Separator className=" bg-slate-300 my-4" />
            <div className="flex justify-center lg:justify-start mt-3 lg:mt-0 space-x-3">
              <IconLink
                href="https://boris-picard.github.io/todo-list-react/"
                icon="Link"
              >
                Voir le site
              </IconLink>
              <IconLink
                href="https://github.com/Boris-Picard/todo-list-react"
                icon="Github"
              >
                Code
              </IconLink>
            </div>
          </CardFooter>
        </div>
        <div
          className="lg:w-1/2 overflow-hidden mt-6 lg:mt-0 rounded-3xl flex"
          onMouseEnter={() => setIsHovered4(true)}
          onMouseLeave={() => setIsHovered4(false)}
        >
          <AspectRatio ratio={16 / 9}>
            <Image
              src={gifReacttasks}
              fill={true}
              quality={75}
              unoptimized
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
              alt="Reacttasks website"
              className={`object-cover rounded-3xl transition-all duration-500 ${isHovered4 ? "scale-110" : ""
                }`}
            />
          </AspectRatio>
        </div>
      </Card>

      <Card className="flex flex-col lg:flex-row shadow-lg bg-[#F8F8FF] dark:bg-[#212529]">
        <div className="lg:w-1/2 flex flex-wrap mr-3">
          <CardHeader className="my-3 xl:lg:md:my-0">
            <div className="flex items-center">
              <span className="text-primary font-bold text-xl">05.</span>
              <h3 className="uppercase lg:md:text-2xl text-xl mx-3 lg:text-start text-center font-extrabold tracking-wide dark:text-white">
                cv numerique.
              </h3>
            </div>
          </CardHeader>
          <CardContent className="p-0 mb-3 xl:lg:md:mb-0">
            <p className="text-base leading-relaxed font-medium">
              Création d'un CV numérique avec Next.js pour explorer TypeScript.
              Expérience approfondie avec les bibliothèques d'UI, notamment
              Shadcn et Aceternity, combinées avec Tailwind CSS.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex flex-wrap gap-3 my-3">
              <Badge variant="secondary">NextJs</Badge>
              <Badge variant="secondary">Typescript</Badge>
              <Badge variant="secondary">Tailwind</Badge>
              <Badge variant="secondary">Shadcn</Badge>
              <Badge variant="secondary">Aceternity</Badge>
            </div>
            <Separator className=" bg-slate-300 my-4" />
            <div className="flex justify-center lg:justify-start mt-3 lg:mt-0 space-x-3">
              <IconLink
                href="https://github.com/Boris-Picard/cv-boris-next-ts"
                icon="Github"
              >
                Code
              </IconLink>
            </div>
          </CardFooter>
        </div>
        <div
          className="lg:w-1/2 overflow-hidden mt-6 lg:mt-0 rounded-3xl flex"
          onMouseEnter={() => setIsHovered5(true)}
          onMouseLeave={() => setIsHovered5(false)}
        >
          <AspectRatio ratio={16 / 9}>
            <Image
              src={gifCv}
              fill={true}
              quality={75}
              unoptimized
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
              alt="CV numérique website"
              className={`object-cover rounded-3xl transition-all duration-500 ${isHovered5 ? "scale-110" : ""
                }`}
            />
          </AspectRatio>
        </div>
      </Card>
    </>
  );
}
