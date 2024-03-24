"use client";
import React from "react";
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
            Développeur <span className="text-primary">Web</span> et Web{" "}
            <span className="text-primary">Mobile</span>
          </span>
          <div className="flex lg:block  justify-center">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="px-12 mx-auto lg:md:p-4 p-3 rounded-full tracking-widest uppercase transition duration-200 bg-primary text-white font-semibold shadow-lg hover:shadow-lg hover:bg-black hover:text-white"
            >
              <a href="/assets/CV-PICARD-BORIS.pdf" target="_blank">
                Télécharger mon cv
              </a>
            </HoverBorderGradient>
          </div>
        </div>
      </div>
    </section>
  );
}
