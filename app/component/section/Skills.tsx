"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Skill from "../Skill";
import { I_skill } from "@/app/service/interface";
import { urlFor } from "@/app/service/client";

interface Prop {
  skills: I_skill[];
}

const Skills = ({ skills }: Prop) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const renderSkill = () => {
    return skills.map((skill, index) => (
      <Skill
        key={skill._id}
        img={urlFor(skill?.image).url()}
        name={skill.title}
        directionLeft={index <= skills.length / 2}
        isInView={isInView}
      />
    ));
  };

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
      <h2 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-semibold">
        Skills
      </h2>

      <div className="grid grid-cols-4 gap-5">{renderSkill()}</div>
    </motion.div>
  );
};

export default Skills;
