"use client";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Badge } from "./ui/badge";
import Image from "next/image";
export default function Projects() {
  return (
    <>
      <div className="flex lg:md:mb-12">
        <span className="lg:md:w-16 rounded-full hidden lg:md:block h-4 bg-primary border-0 self-center" />
        <h2 className="uppercase text-4xl lg:text-7xl mx-auto lg:md:mx-16 lg:md:text-start text-center font-black tracking-wide dark:text-white">
          projets.
        </h2>
      </div>
      <div className="grid lg:md:grid-cols-2 grid-cols-1 items-center">
        <div className="lg:row-span-1">
          <div className="flex flex-wrap items-center">
            <span className="text-primary font-bold text-xl">01.</span>
            <h3 className="uppercase text-2xl lg:mx-3 lg:text-start text-center font-extrabold tracking-wide dark:text-white">
              Blazerifle
            </h3>
          </div>
          <p className="text-base leading-relaxed">
            Ce projet a mis en place une base de données MySQL et intégré HTML,
            CSS, JavaScript et PHP selon le modèle MVC. Pour la sécurité, un
            singleton, PDO et des transactions ont été utilisés, avec un token
            JWT pour la validation d'email. Le site comprend la gestion des
            utilisateurs, des articles, des commentaires, des favoris, des jeux,
            des catégories, un calendrier d'événements et des vidéos, avec neuf
            opérations CRUD. La mise en ligne s'est faite sur Hostinger via
            FileZilla, avec des mesures de sécurité telles que filter_input et
            password_hash. Conformité au RGPD, référencement SEO et respect des
            normes W3C ont été assurés.
          </p>
          <div className="flex flex-wrap">
            <Badge variant="secondary">HTML</Badge>
            <Badge variant="secondary">CSS</Badge>
            <Badge variant="secondary">Javascript</Badge>
            <Badge variant="secondary">PHP</Badge>
            <Badge variant="secondary">MySql</Badge>
            <Badge variant="secondary">POO</Badge>
          </div>
        </div>
        <div className="lg:row-span-1">
          <AspectRatio className="flex justify-end" ratio={16 / 9}>
            <Image
              src={"/img/blazerifle-preview.png"}
              height={600}
              width={600}
              alt="blazerifle website"
              className="object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </>
  );
}
