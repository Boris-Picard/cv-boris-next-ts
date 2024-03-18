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
      name: "About",
      link: "/about",
      icon: (
        <Button size={"icon"}>
          <IconUser className="h-4 w-4 bg-primary dark:text-white" />
        </Button>
      ),
    },
    {
      name: "Projects",
      link: "/about",
      icon: (
        <Button size={"icon"}>
          <IconApiApp className="h-4 w-4 bg-primary dark:text-white" />
        </Button>
      ),
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <Button size={"icon"}>
          <IconMessage className="h-4 w-4 bg-primary dark:text-white" />
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
