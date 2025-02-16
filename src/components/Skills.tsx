import Image from "next/image";

import logoJs from "../../public/assets/logo-javascript.svg";
import logoTs from "../../public/assets/typescript.svg";
import logoPhp from "../../public/assets/php-1.svg";
import logoNodeJs from "../../public/assets/nodejs-icon.svg";
import logoReact from "../../public/assets/react-2.svg";
import logoNextjs from "../../public/assets/next-js.svg";
import logoAstro from "../../public/assets/Astro.svg";
import logoMySql from "../../public/assets/mysql-logo.svg";
import logoPostgres from "../../public/assets/PostgresSQL.svg";
import logoMongo from "../../public/assets/mongodb-icon-1.svg";
import logoJest from "../../public/assets/Jest.svg";
import logoDocker from "../../public/assets/docker.svg";
import logoGit from "../../public/assets/git-icon.svg";
import logoFigma from "../../public/assets/figma-5.svg";

export default function Skills() {
  const logos = [
    {
      name: "Javascript",
      src: logoJs,
      alt: "JS logo",
      width: 30,
      height: 30,
    },
    {
      name: "Typescript",
      src: logoTs,
      alt: "Typescript logo",
      width: 30,
      height: 30,
    },
    {
      name: "PHP",
      src: logoPhp,
      alt: "PHP logo",
      width: 30,
      height: 30,
    },
    {
      name: "NodeJs",
      src: logoNodeJs,
      alt: "NodeJs logo",
      width: 30,
      height: 30,
    },
    {
      name: "React",
      src: logoReact,
      alt: "React logo",
      width: 30,
      height: 30,
    },
    {
      name: "Nextjs",
      src: logoNextjs,
      alt: "Nextjs logo",
      width: 30,
      height: 30,
      class: "dark:invert",
    },
    {
      name: "Astro",
      src: logoAstro,
      alt: "Astro logo",
      width: 30,
      height: 30,
      class: "dark:invert",
    },
    {
      name: "MySql",
      src: logoMySql,
      alt: "MySql logo",
      width: 30,
      height: 30,
    },
    {
      name: "PostgreSQL",
      src: logoPostgres,
      alt: "PostgreSQL logo",
      width: 30,
      height: 30,
    },
    {
      name: "MongoDB",
      src: logoMongo,
      alt: "MongoDB logo",
      width: 30,
      height: 30,
    },
    {
      name: "Jest",
      src: logoJest,
      alt: "Jest logo",
      width: 30,
      height: 30,
    },
    {
      name: "Docker",
      src: logoDocker,
      alt: "Docker logo",
      width: 30,
      height: 30,
    },
    {
      name: "Git & Github",
      src: logoGit,
      alt: "Git & Github logo",
      width: 30,
      height: 30,
    },
    {
      name: "Figma",
      src: logoFigma,
      alt: "Figma logo",
      width: 30,
      height: 30,
    },
  ];

  return (
    <div className="flex lg:md:justify-between justify-center items-end flex-wrap">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="flex flex-col items-center m-4 w-1/3 lg:md:w-auto"
        >
          <Image
            className={logo.class}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            loading="lazy"
            quality={75}
            style={{ width: "30px", height: "30px" }}
          />
          <p className="mt-2">{logo.name}</p>
        </div>
      ))}
    </div>
  );
}
