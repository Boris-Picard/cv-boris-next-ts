"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Button } from "./ui/button";

export function SparklesPreview() {
  return (
    <section
      id="hero"
      className="min-h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="lg:container text-center">
        <h1 className="md:text-7xl uppercase text-5xl lg:text-[170px] font-bold text-center text-white relative z-20">
          <TextGenerateEffect words="Boris Picard" />
        </h1>
        <span className="uppercase text-white font-bold lg:text-2xl md:text-5xl text-xl relative z-20">
          <TextGenerateEffect words="Développeur Web et web mobile" />
        </span>
        <Button className="my-10 relative z-20 shadow-[inset_0_0_0_2px_#616467] px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          Télécharger mon cv
        </Button>
      </div>
    </section>
  );
}
