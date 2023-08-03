/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import Robby2 from "../../image/robby2.jpeg";

const About = () => {
  return (
    <div className="h-screen relative flex flex-col justify-center items-center text-center md:text-left md:flex-row max-w-7xl mx-auto px-10 ">
      <motion.h3
        initial={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{
          opacity: 1,
        }}
        className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-semibold"
      >
        About
      </motion.h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-[400px] md:h-[500px] xl:w-[500px] xl:h-[600px]"
        src={Robby2.src}
      />

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        className=" space-y-8 p-0 md:p-10"
      >
        <h4 className="text-4xl font-semibold">
          About <span className="text-secondary">Me</span>
        </h4>
        <p className="text-base">
          I am a front-end developer focusing on writing clean code and
          developing scalable and highly compatible components,as well as a good
          user experience
        </p>
      </motion.div>
    </div>
  );
};

export default About;
