import { Separator } from "./ui/separator";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Accordion,
} from "./ui/accordion";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { MapPin } from "lucide-react";
import { Badge } from "./ui/badge";

export default function Experiences() {
  return (
    <>
      <Separator className="my-4 bg-slate-300" />
      <div className="flex items-center">
        <span className="lg:md:w-14 rounded-full hidden lg:md:block h-2 bg-primary border-0 self-center" />
        <h3 className="uppercase lg:md:text-2xl text-xl mx-auto lg:md:mx-16 lg:md:text-start text-center font-extrabold tracking-wide dark:text-white">
          Experiences.
        </h3>
      </div>
      {/* <Separator className="my-4" /> */}
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-semibold">
            MCDONALD'S (2017-2021)
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <div className="flex flex-row items-center justify-center lg:md:justify-start">
                  <MapPin />
                  <span className="mx-3 font-semibold">Amiens</span>
                </div>
              </CardHeader>
              <CardContent className="dark:text-white font-medium flex flex-col space-y-1.5 pt-3">
                <span>Responsabilités</span>
                <span>Adaptabilité</span>
                <span>Gestion du stress</span>
                <span>Travail d'équipe</span>
              </CardContent>
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
                <div className="flex flex-row items-center justify-center lg:md:justify-start">
                  <MapPin />
                  <span className="lg:md:mx-3 mx-2 font-semibold">
                    Amiens, Paris - Millenium (MGG)
                  </span>
                </div>
              </CardHeader>
              <CardContent className="dark:text-white font-medium flex flex-col space-y-1.5 pt-3">
                <span>Travail d'équipe</span>
                <span>Communication</span>
                <span>Adaptabilité</span>
                <span>Autodiscipline</span>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
        <Separator className="my-4 bg-slate-300" />
        <div className="flex items-center">
          <span className="lg:md:w-14 rounded-full hidden lg:md:block h-2 bg-primary border-0 self-center" />
          <h3 className="uppercase lg:md:text-2xl text-xl mx-auto lg:md:mx-16 lg:md:text-start text-center font-extrabold tracking-wide dark:text-white">
            Formations.
          </h3>
        </div>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-semibold">
            LA MANU (2023-2024){" "}
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <div className="flex flex-row items-center justify-center lg:md:justify-start">
                  <MapPin />
                  <span className="mx-3 font-semibold">Amiens</span>
                </div>
              </CardHeader>
              <CardContent className="dark:text-white font-medium flex flex-col space-y-1.5 pt-3">
                <span>RNCP Niveau 5 - "Développeur Web et Web Mobile"</span>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary">HTML</Badge>
                  <Badge variant="secondary">CSS</Badge>
                  <Badge variant="secondary">Javascript</Badge>
                  <Badge variant="secondary">PHP</Badge>
                  <Badge variant="secondary">MySql</Badge>
                  <Badge variant="secondary">POO</Badge>
                </div>
              </CardFooter>
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
