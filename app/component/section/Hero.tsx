"use client";

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import CriclesBackground from "../background/Cricles.background";
import Link from "next/link";
import { I_pageInfo } from "@/app/service/interface";
import { urlFor } from "@/app/service/client";

interface Prop {
  pageInfo: I_pageInfo;
}

const Hero = ({ pageInfo }: Prop) => {
  const [text] = useTypewriter({
    words: [...pageInfo.typewriter],
    loop: true,
  });

  return (
    <div className="h-screen  flex flex-col  justify-center items-center  space-y-8  text-center overflow-hidden pt-24 ">
      <CriclesBackground />

      <img
        src={urlFor(pageInfo?.heroImage).url()}
        sizes={"128"}
        className=" relative rounded-full w-32  h-32 mx-auto object-cover"
        alt="Robby"
      />

      <div className="z-20">
        <h2 className="text-xs md:text-sm uppercase text-gray-300  tracking-[15px] pb-4">
          {pageInfo?.role}
        </h2>

        <h1 className="text-3xl lg:text-6xl md:text-5xl font-semibold px-10 ">
          <span>{text}</span>
          <Cursor cursorColor="#ffb400" />
        </h1>

        <div className="pt-4">
          <Link href={"#About"}>
            <button className="heroBtn">About</button>
          </Link>
          <Link href={"#Experience"}>
            <button className="heroBtn">Experience</button>
          </Link>
          <Link href={"#Skills"}>
            <button className="heroBtn">Skills</button>
          </Link>
          <Link href={"#Projects"}>
            <button className="heroBtn">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
