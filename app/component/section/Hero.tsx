import React from "react";
import { useTranslations } from "next-intl";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import CriclesBackground from "../background/Cricles.background";
import Robby1 from "../../image/robby1.jpeg";
import Link from "next/link";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Hi! I'm Robby Hong"],
    loop: true,
  });

  return (
    <div className="h-screen  flex flex-col  justify-center items-center  space-y-8  text-center overflow-hidden pt-24 ">
      <CriclesBackground />
      <img
        className=" relative rounded-full h-32 w-32 mx-auto object-cover"
        src={Robby1.src}
        alt="Robby"
      />

      <div className="z-20">
        <h2 className="text-xs md:text-sm uppercase text-gray-500  tracking-[15px] pb-4">
          Front End Developer
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
