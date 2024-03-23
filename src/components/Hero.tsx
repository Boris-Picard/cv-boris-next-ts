"use client";
import React from "react";
import { Button } from "./ui/button";
import { MeteorsDemo } from "./MeteorsHero";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen relative w-full flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="md:lg:container">
        <div className="flex flex-col space-y-6">
          <MeteorsDemo />
          <h1 className="uppercase text-4xl lg:text-7xl text-center lg:text-start font-black tracking-wide dark:text-white">
            boris picard.
          </h1>
          <span className="uppercase dark:text-white font-bold text-center lg:text-start lg:text-2xl text-xl">
            Développeur <span className="text-primary">Web</span>
          </span>
          <div className="flex lg:block md:block">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="px-12 mx-auto py-6 rounded-full tracking-widest uppercase transition duration-200 bg-primary text-white font-semibold shadow-lg hover:shadow-lg hover:bg-black hover:text-white"
            >
              {/* <Button className="px-12 mx-auto py-8 rounded-full tracking-widest uppercase transition duration-200 bg-primary text-white font-semibold shadow-lg hover:shadow-lg hover:bg-black hover:text-white">
                Télécharger mon cv
              </Button> */}
              <span>Télécharger mon cv</span>
            </HoverBorderGradient>
          </div>
        </div>
      </div>
    </section>
  );
}
