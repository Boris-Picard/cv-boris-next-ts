"use client";
import React from "react";
import { Button } from "./ui/button";
import { MeteorsDemo } from "./MeteorsHero";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen relative w-full flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="lg:container">
        <div className="flex flex-col space-y-6">
          <MeteorsDemo />
          <h1 className="uppercase text-4xl lg:text-7xl text-center lg:text-start font-bold tracking-wide dark:text-white">
            boris picard.
          </h1>
          <span className="uppercase dark:text-white font-bold text-center lg:text-start lg:text-2xl text-xl">
            Développeur{" "}
            <span className="text-primary dark:text-[#EF8801]">Web</span>
          </span>
          <div className="flex lg:block md:block">
            <Button className="hover:shadow-[inset_0_0_0_2px_#616467] px-12 mx-auto py-8 rounded-full tracking-widest uppercase font-bold transition duration-200">
              Télécharger mon cv
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
