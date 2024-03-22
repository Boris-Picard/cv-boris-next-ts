"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import {
  IconApiApp,
  IconLetterS,
  IconMessage,
  IconUser,
} from "@tabler/icons-react";
import { Button } from "./ui/button";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "A Propos",
      link: "#about",
      icon: (
        <Button
          aria-label="About"
          size={"icon"}
          variant={"link"}
          className="hover:bg-primary hover:shadow-none dark:bg-white dark:hover:bg-primary"
        >
          <IconUser className="h-4 w-4 dark:text-black text-black" />
        </Button>
      ),
    },
    {
      name: "Projets",
      link: "#projects",
      icon: (
        <Button
          aria-label="Projects"
          size={"icon"}
          variant={"link"}
          className="hover:bg-primary hover:shadow-none dark:bg-white dark:hover:bg-primary"
        >
          <IconApiApp className="h-4 w-4  text-black dark:text-black " />
        </Button>
      ),
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <Button
          aria-label="Contact"
          size={"icon"}
          variant={"link"}
          className="hover:bg-primary hover:shadow-none dark:bg-white dark:hover:bg-primary"
        >
          <IconMessage className="h-4 w-4 text-black dark:text-black" />
        </Button>
      ),
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
