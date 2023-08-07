/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { I_pageInfo } from "@/app/service/interface";
import { urlFor } from "@/app/service/client";

interface Prop {
  pageInfo: I_pageInfo;
}

const About = ({ pageInfo }: Prop) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{
        opacity: 1,
      }}
      className="mt-[1px] h-screen relative flex flex-col justify-center items-center text-center space-y-7 md:text-left md:flex-row max-w-7xl mx-auto px-10 "
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-semibold">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        className="flex-shrink-0  w-40 h-40 rounded-full object-cover iphoneSE:w-56 iphoneSE:h-56 md:rounded-lg md:w-[400px] md:h-[500px] xl:w-[500px] xl:h-[600px]"
        src={urlFor(pageInfo?.aboutMeImage).url()}
      />

      <div className=" space-y-8 p-0 md:p-10">
        <h4 className="text-4xl font-semibold">
          About <span className="text-secondary">Me</span>
        </h4>
        <p className="text-base">{pageInfo.aboutMe}</p>
      </div>
    </motion.div>
  );
};

export default About;
