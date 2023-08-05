import React, { useEffect } from "react";

import { motion, useAnimate } from "framer-motion";

interface Prop {
  directionLeft?: boolean;
  isInView?: boolean;
  img?: string;
  name: string;
}

function Skill({ directionLeft, isInView, img, name }: Prop) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1, x: 0 }, { duration: 0.5 });
    }
  }, [isInView]);

  return (
    <div className=" group relative flex cursor-pointer overflow-hidden">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 1 }}
        viewport={{ once: true }}
        ref={scope}
        alt={name}
        src={img}
        className="rounded-full  p-2 md:p-6 border border-gary-500 object-cover w-16 h-16 md:w-24 md:h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className=" absolute opacity-0 rounded-full transition duration-300 ease-in-out  group-hover:opacity-80  group-hover:bg-white  w-16 h-16 md:w-24 md:h-24 xl:w-32 xl:h-32">
        <div className="flex justify-center items-center h-full">
          <p className=" text-sm font-bold text-black opacity-100">{name}</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
