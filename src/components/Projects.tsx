"use client";
import Image from "next/image";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Badge } from "./ui/badge";
import { Github, Link } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function Projects() {
  return (
    <>
      <div className="flex lg:md:mb-12">
        <span className="lg:md:w-16 rounded-full hidden lg:md:block h-4 bg-primary border-0 self-center" />
        <h2 className="uppercase text-4xl lg:text-7xl mx-auto lg:md:mx-16 lg:md:text-start text-center font-black tracking-wide dark:text-white">
          projets.
        </h2>
      </div>
      <div className="grid lg:md:grid-cols-3 grid-cols-1 lg:md:gap-4">
        <div className="xl:lg:col-span-2 col-span-3 grid">
          <Card>
            <CardHeader className="space-y-4">
              <div className="flex flex-wrap items-center">
                <span className="text-primary font-bold text-xl">01.</span>
                <h3 className="uppercase lg:md:text-2xl text-xl lg:mx-3 lg:text-start text-center font-extrabold tracking-wide dark:text-white">
                  Blazerifle
                </h3>
              </div>
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={"/img/blazerifle-preview.png"}
                  fill={true}
                  quality={75}
                  alt="blazerifle website"
                  className="object-cover rounded-3xl"
                />
              </AspectRatio>
            </CardHeader>
            <Separator className="my-4 border" />
            <CardContent className="text-base leading-relaxed mt-4 font-semibold">
              Projet pour l'obtention du titre RNCP Niveau 5 "Développeur Web et
              Web Mobile" : Maquette Figma, Merise, MySQL, PHP. Gestion complète
              des utilisateurs, articles, commentaires, favoris. Sécurité
              renforcée : validation d'email (JWT), hashage des mots de passe,
              RGPD. Utilisation de singleton et transactions pour la sécurité
              des opérations sur la base de données. SEO optimisé, respect des
              normes W3C. Mise en ligne sur Hostinger.
            </CardContent>
            <Separator className="mt-4 border" />
            <CardFooter>
              <div className="flex flex-wrap space-x-3">
                <Badge variant="secondary">HTML</Badge>
                <Badge variant="secondary">CSS</Badge>
                <Badge variant="secondary">Javascript</Badge>
                <Badge variant="secondary">PHP</Badge>
                <Badge variant="secondary">MySql</Badge>
                <Badge variant="secondary">POO</Badge>
              </div>
              <div className="flex flex-wrap justify-end flex-1 space-x-4">
                <Button>
                  <Link />
                  <span className="mx-2 font-semibold">Website</span>
                </Button>
                <Button>
                  <Github />
                  <span className="mx-2 font-semibold">Code</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="xl:lg:col-span-1 col-span-3 grid">
          <Card className="flex flex-col justify-center">
            <CardHeader>
              <div className="flex flex-wrap items-center">
                <span className="text-primary font-bold text-xl">02.</span>
                <h3 className="uppercase lg:md:text-2xl text-xl lg:mx-3 lg:text-start text-center font-extrabold tracking-wide dark:text-white">
                  Rent my ride
                </h3>
              </div>
              <AspectRatio ratio={4 / 3}>
                <Image
                  src={"/img/rent-my-ride.png"}
                  fill={true}
                  quality={75}
                  alt="blazerifle website"
                  className="object-cover rounded-3xl"
                />
              </AspectRatio>
            </CardHeader>
            <Separator className="my-4 border" />
            <CardContent className="text-base leading-relaxed font-semibold">
              Premier projet MERISE, MySQL, PHP : Site location voiture avec
              CRUD complet, tableau de bord, barre de recherche. Sécurité
              renforcée : nettoyage et validation des données côté serveur,
              PHPMailer pour confirmation location. Expérience utilisateur
              fluide et sécurisée.
            </CardContent>
            <Separator className="mt-4 border" />
            <CardFooter>
              <div className="flex space-x-1">
                <Badge variant="secondary">HTML</Badge>
                <Badge variant="secondary">CSS</Badge>
                <Badge variant="secondary">Javascript</Badge>
                <Badge variant="secondary">PHP</Badge>
                <Badge variant="secondary">MySql</Badge>
                <Badge variant="secondary">POO</Badge>
              </div>
            </CardFooter>
            <div className="flex justify-between py-3">
              <Button>
                <Link />
                <span className="mx-2 font-semibold">Website</span>
              </Button>
              <Button>
                <Github />
                <span className="mx-2 font-semibold">Code</span>
              </Button>
            </div>
          </Card>
        </div>
        <div className="col-span-1 grid">
          <Card>
            <CardHeader></CardHeader>
            <CardContent></CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
        <div className="col-span-2 grid">
          <Card>
            <CardHeader></CardHeader>
            <CardContent></CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
