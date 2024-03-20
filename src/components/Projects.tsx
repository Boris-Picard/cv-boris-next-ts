"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const [mouseOver, setMouseOver] = useState(false);

  const animateStyle = {
    scale: 1.5,
    opacity: 1,
    transition: { duration: 0.3 },
  };

  return (
    <>
      <div className="flex lg:md:mb-12">
        <span className="lg:md:w-16 rounded-full hidden lg:md:block h-4 bg-primary border-0 self-center" />
        <h2 className="uppercase text-4xl lg:text-7xl mx-auto lg:md:mx-16 lg:md:text-start text-center font-black tracking-wide dark:text-white">
          projets.
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid col-span-1">
          <Card
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
            className="cursor-pointer"
          >
            <CardHeader>
              <CardTitle>
                <div className="flex items-center space-x-3">
                  <span className="text-primary font-extrabold">01.</span>
                  <h3 className="uppercase lg:md:text-2xl text-xl lg:md:text-start text-center font-extrabold tracking-wide dark:text-white">
                    BlazeRifle.
                  </h3>
                </div>
              </CardTitle>
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={"/img/blazerifle-preview.png"}
                  fill={true}
                  quality={75}
                  alt="blazerifle website"
                  className={`object-cover rounded-3xl transition-all duration-500  ${
                    mouseOver ? "scale-110" : ""
                  }`}
                />
              </AspectRatio>
              <CardDescription className="pt-3 font-semibold text-md flex flex-row justify-between">
                Website about videos games
                <motion.div animate={mouseOver ? animateStyle : {}}>
                  {mouseOver ? <ArrowRight /> : <ArrowUpRight />}
                </motion.div>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="grid col-span-1">
          <Card>
            <CardHeader></CardHeader>
            <CardContent></CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
