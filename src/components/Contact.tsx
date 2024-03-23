import { Github, Linkedin, Mail } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";

export default function Contact() {
  return (
    <>
      <div className="flex lg:md:mb-12">
        <span className="lg:md:w-16 rounded-full hidden lg:md:block h-4 bg-primary border-0 self-center" />
        <h2 className="uppercase text-4xl lg:text-7xl mx-auto lg:md:mx-16 lg:md:text-start text-center font-black tracking-wide dark:text-white">
          Contact.
        </h2>
      </div>
      <Card className="flex lg:md:p-24 shadow-lg bg-[#F8F8FF] dark:bg-[#212529]">
        <CardHeader></CardHeader>
        <CardContent className="space-y-6">
          <h2 className="lg:md:text-3xl text-2xl font-bold">
            Ouvert aux opportunités de collaboration et de développement
            professionnel.
          </h2>
          <p className="font-medium">N'hésitez pas à me contacter !</p>
          <div className="flex-col flex lg:w-1/5 md:w-1/4 space-y-6">
            <a
              aria-label="Mail"
              href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%68%65%6C%6C%6F%40%62%6F%72%69%73%2D%70%69%63%61%72%64%2E%66%72"
              className="inline-flex items-center p-3 dark:hover:text-primary justify-center whitespace-nowrap text-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary rounded-full text-white shadow-lg dark:bg-primary dark:hover:bg-white dark:hover:text-black dark:text-white  hover:bg-black  hover:text-white"
            >
              <Mail />
              <span className="mx-2">Mon Email</span>
            </a>
            <a
              aria-label="Linkedin"
              href="https://www.linkedin.com/in/boris-picard-2906029b/"
              target="_blank"
              className="inline-flex items-center p-3 dark:hover:text-primary justify-center whitespace-nowrap text-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary rounded-full text-white shadow-lg dark:bg-primary dark:hover:bg-white dark:hover:text-black dark:text-white  hover:bg-black  hover:text-white"
            >
              <Linkedin />
              <span className="mx-2">Mon Linkedin</span>
            </a>
            <a
              aria-label="Github"
              href="https://github.com/Boris-Picard"
              target="_blank"
              className="inline-flex items-center p-3 dark:hover:text-primary justify-center whitespace-nowrap text-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary rounded-full text-white shadow-lg dark:bg-primary dark:hover:bg-white dark:hover:text-black dark:text-white  hover:bg-black  hover:text-white"
            >
              <Github />
              <span className="mx-2">Mon Github</span>
            </a>
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
}
