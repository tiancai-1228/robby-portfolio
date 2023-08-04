import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Skill from "../Skill";
import Robby1 from "../../image/robby1.jpeg";

const Skills = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{
        opacity: 1,
      }}
      ref={ref}
      viewport={{ once: true }}
      className="mt-[1px] h-screen relative flex flex-col justify-center items-center  max-w-7xl mx-auto px-10 "
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-semibold">
        Skills
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {data.map((el) => (
          <Skill
            key={el}
            img={Robby1.src}
            name={el.toString()}
            directionLeft={el > data.length / 2}
            isInView={isInView}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
