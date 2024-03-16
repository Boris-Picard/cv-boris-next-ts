"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import {
  IconApiApp,
  IconHome,
  IconLetterS,
  IconMessage,
  IconUser,
} from "@tabler/icons-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "/about",
      icon: (
        <IconLetterS className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Portfolio",
      link: "/about",
      icon: <IconApiApp className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
