"use client";

import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface Prop {
  directionLeft?: boolean;
  isInView?: boolean;
  img?: string;
  name: string;
  className?: string;
}

function Skill({ directionLeft, isInView, img, name, className }: Prop) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1, x: 0 }, { duration: 0.5 });
    }
  }, [isInView]);

  return (
    <div
      className={twMerge(
        "group relative flex cursor-pointer overflow-hidden w-16 h-16 md:w-24 md:h-24 xl:w-32 xl:h-32 border border-gary-500 rounded-full",
        className
      )}
    >
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 1 }}
        viewport={{ once: true }}
        ref={scope}
        alt={name}
        src={img}
        sizes={"64"}
        className=" rounded-full  p-3  object-cover w-full h-full  filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className=" absolute opacity-0 rounded-full transition duration-300 ease-in-out  group-hover:opacity-80  group-hover:bg-white  w-full h-full">
        <div className="flex justify-center items-center h-full  p-2 ">
          <p className=" text-[10px] md:text-sm font-bold text-black opacity-100">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
