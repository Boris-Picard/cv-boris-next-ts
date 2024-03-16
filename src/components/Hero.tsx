"use client";
import React from "react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen relative w-full flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="lg:container text-center">
        <h1 className="md:text-7xl uppercase text-5xl lg:text-[170px] font-bold text-center text-white"></h1>
        <span className="uppercase text-white font-bold lg:text-2xl md:text-5xl text-xl"></span>
        <Button className="hover:shadow-[inset_0_0_0_2px_#616467] px-12 py-8 rounded-full tracking-widest uppercase font-bold transition duration-200">
          Télécharger mon cv
        </Button>
      </div>
    </section>
  );
}
