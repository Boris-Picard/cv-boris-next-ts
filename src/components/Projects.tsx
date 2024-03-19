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
      <div className="grid lg:md:grid-cols-3 gap-4">
        <div className="col-span-2">
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
                  alt="blazerifle website"
                  className="object-cover rounded-3xl"
                />
              </AspectRatio>
            </CardHeader>
            <Separator className="my-4 bg-slate-300" />
            <CardContent className="text-base leading-relaxed mt-4 font-semibold">
              Portail d'actualités jeux vidéos : Tableau de bord complet,
              validation d'email (JWT), profils utilisateurs, commentaires
              vérifiés, ajout d'articles en favoris. Sécurité renforcée avec
              nettoyage et vérification des données. Une expérience captivante
              pour les passionnés du jeu.
            </CardContent>
            <Separator className="mt-4 bg-slate-300" />
            <CardFooter>
              <div className="flex space-x-3">
                <Badge variant="secondary">HTML</Badge>
                <Badge variant="secondary">CSS</Badge>
                <Badge variant="secondary">Javascript</Badge>
                <Badge variant="secondary">PHP</Badge>
                <Badge variant="secondary">MySql</Badge>
                <Badge variant="secondary">POO</Badge>
              </div>
              <div className="flex justify-end flex-1 space-x-4">
                <Button>
                  <Github />
                </Button>
                <Button>
                  <Link />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="col-span-1">
          <Card>
            <CardHeader></CardHeader>
            <CardContent></CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
        <div className="col-span-1">
          <Card>
            <CardHeader></CardHeader>
            <CardContent></CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
        <div className="col-span-2">
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
