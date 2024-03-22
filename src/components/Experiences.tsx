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
import Skills from "./Skills";

export default function Experiences() {
  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        <Separator className="my-4 bg-slate-300" />
        <div className="flex items-center my-3">
          <span className="lg:md:w-14 rounded-full hidden lg:md:block h-2 bg-primary border-0 self-center" />
          <h3 className="uppercase lg:md:text-2xl text-xl mx-auto lg:md:mx-16 lg:md:text-start text-center font-extrabold tracking-wide dark:text-white">
            Formations.
          </h3>
        </div>
        <Card className="p-0 mb-3 shadow-lg bg-[#F8F8FF] dark:bg-[#212529]">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-medium px-4">
              LA MANU (2023-2024){" "}
            </AccordionTrigger>
            <AccordionContent>
              <CardHeader>
                <div className="flex flex-row items-center justify-center lg:md:justify-start px-4">
                  <MapPin />
                  <span className="mx-3 font-semibold">Amiens</span>
                </div>
              </CardHeader>
              <CardContent className="dark:text-white font-medium flex flex-col space-y-1.5 pt-3 px-4">
                <span>RNCP Niveau 5 - "Développeur Web et Web Mobile"</span>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-3 mt-6 px-4">
                  <Badge variant="secondary">HTML</Badge>
                  <Badge variant="secondary">CSS</Badge>
                  <Badge variant="secondary">Javascript</Badge>
                  <Badge variant="secondary">PHP</Badge>
                  <Badge variant="secondary">MySql</Badge>
                  <Badge variant="secondary">POO</Badge>
                </div>
              </CardFooter>
            </AccordionContent>
          </AccordionItem>
        </Card>
      </Accordion>
      <Separator className="my-4 mt-6 bg-slate-300" />
      <div className="flex items-center my-3">
        <span className="lg:md:w-14 rounded-full hidden lg:md:block h-2 bg-primary border-0 self-center" />
        <h3 className="uppercase lg:md:text-2xl text-xl mx-auto lg:md:mx-16 lg:md:text-start text-center font-extrabold tracking-wide dark:text-white">
          Skills.
        </h3>
      </div>
      <Skills />
    </>
  );
}
