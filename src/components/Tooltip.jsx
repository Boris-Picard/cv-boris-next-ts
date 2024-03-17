"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Html",
    image: "assets/html-1.svg",
  },
  {
    id: 2,
    name: "Css",
    image: "assets/css-3.svg",
  },
  {
    id: 3,
    name: "Javascript",
    image: "assets/logo-javascript.svg",
  },
  {
    id: 4,
    name: "Typescript",
    image: "assets/typescript.svg",
  },
  {
    id: 5,
    name: "PHP",
    image: "assets/php-1.svg",
  },
  {
    id: 6,
    name: "Worpress",
    image: "assets/wordpress-icon.svg",
  },
  {
    id: 7,
    name: "React",
    image: "assets/react-2.svg",
  },
  {
    id: 8,
    name: "NextJs",
    image: "assets/next-js.svg",
  },
  {
    id: 9,
    name: "MySql",
    image: "assets/mysql-logo.svg",
  },
  {
    id: 10,
    name: "MongoDB",
    image: "assets/mongodb-icon-1.svg",
  },
  {
    id: 12,
    name: "NodeJS",
    image: "assets/nodejs-icon.svg",
  },
  {
    id: 13,
    name: "Boostrap",
    image: "assets/bootstrap-4.svg",
  },
  {
    id: 14,
    name: "Tailwind",
    image: "assets/tailwind-css-2.svg",
  },
  {
    id: 15,
    name: "NPM",
    image: "assets/npm.svg",
  },
  {
    id: 16,
    name: "Vite",
    image: "assets/vitejs.svg",
  },
  {
    id: 17,
    name: "Docker",
    image: "assets/docker.svg",
  },
  {
    id: 18,
    name: "Git",
    image: "assets/git-icon.svg",
  },
  {
    id: 18,
    name: "Figma",
    image: "assets/figma-5.svg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-wrap gap-3 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
