import { Separator } from "./ui/separator";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { Card, CardDescription, CardFooter, CardHeader } from "./ui/card";
import { MapPin } from "lucide-react";
import { Badge } from "./ui/badge";

export default function Experiences() {
  return (
    <>
      <Separator className="my-4" />
      <h3 className="text-3xl font-extrabold">Experiences.</h3>
      <Separator className="my-4" />
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-semibold">
            MCDONALD'S (2017-2021)
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <div className="flex flex-row items-center">
                  <MapPin />
                  <span className="mx-3 font-semibold">Amiens</span>
                </div>
              </CardHeader>
              <CardDescription className="dark:text-white font-medium flex flex-col space-y-1.5 pt-3">
                <span>Responsabilités</span>
                <span>Adaptabilité</span>
                <span>Gestion du stress</span>
                <span>Travail d'équipe</span>
              </CardDescription>
            </Card>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-semibold">
            Joueur professionnel (2010-2016)
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <div className="flex flex-row items-center">
                  <MapPin />
                  <span className="mx-3 font-semibold">Amiens</span>
                </div>
              </CardHeader>
              <CardDescription className="dark:text-white font-medium flex flex-col space-y-1.5 pt-3">
                <span>Travail d'équipe</span>
                <span>Communication</span>
                <span>Adaptabilité</span>
                <span>Autodiscipline</span>
              </CardDescription>
            </Card>
          </AccordionContent>
        </AccordionItem>
        <Separator className="my-4" />
        <h3 className="text-3xl font-extrabold mt-4">Formations.</h3>
        <Separator className="my-4" />
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-semibold">
            LA MANU (2023-2024){" "}
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <div className="flex flex-row items-center">
                  <MapPin />
                  <span className="mx-3 font-semibold">Amiens</span>
                </div>
              </CardHeader>
              <CardDescription className="dark:text-white font-medium flex flex-col space-y-1.5 pt-3">
                <span>RNCP Niveau 5 - "Développeur Web et Web Mobile"</span>
              </CardDescription>
              <CardFooter>
                <Badge variant="secondary" className="mr-2">
                  HTML
                </Badge>
                <Badge variant="secondary" className="mx-2">
                  CSS
                </Badge>
                <Badge variant="secondary" className="mx-2">
                  Javascript
                </Badge>
                <Badge variant="secondary" className="mx-2">
                  PHP
                </Badge>
                <Badge variant="secondary" className="mx-2">
                  MySql
                </Badge>
                <Badge variant="secondary" className="mx-2">
                  POO
                </Badge>
              </CardFooter>
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
