"use client";

import React from "react";
import { motion } from "framer-motion";
import { I_project } from "@/app/service/interface";
import { urlFor } from "@/app/service/client";
import Skill from "../Skill";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";
interface Prop {
  projects: I_project[];
}

const Projects = ({ projects }: Prop) => {
  const renderTech = (projects: I_project) => {
    return projects.technologies.map((tech, index) => (
      <Skill
        key={tech._id}
        img={urlFor(tech?.image).url()}
        name={tech.title}
        directionLeft={index <= projects.technologies.length / 2}
        isInView={true}
        className="w-12 h-12 md:w-16 md:h-16 xl:w-14 xl:h-14 border-0"
      />
    ));
  };

  const Project = () => {
    return projects.map((project) => (
      <SwiperSlide
        key={project._id}
        className="w-screen h-full  flex-shrink-0 snap-center flex flex-col space-y-2 items-center justify-center px-10 md:px-20 lg:p-[150px] "
      >
        <motion.img
          initial={{ y: -300, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          src={urlFor(project.image).url()}
          className="w-[300px] h-[200px] md:w-[400px] md:h-[400px] xl:w-[800px] xl:h-[800px] object-cover object-center  "
          alt={project.title}
        />

        <div className="space-y-2 iphoneSE:space-y-4 md:space-y-6 px-0 md:px-10 max-w-6xl">
          <h3 className=" text-2xl md:text-4xl font-semibold text-center">
            {project.title}
          </h3>

          <div className="flex items-center justify-center space-x-2">
            {renderTech(project)}
          </div>

          <p className="text-[12px]  iphoneSE:text-sm md:text-2xl">
            {project.summary}
          </p>
        </div>
      </SwiperSlide>
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true }}
      className="mt-[1px] h-screen relative flex flex-col justify-center items-center  max-w-full mx-auto px-0 md:px-10  "
    >
      <h2 className=" absolute top-24  uppercase tracking-[20px] text-gray-500 text-2xl font-semibold">
        Project
      </h2>

      <Swiper
        modules={[Pagination]}
        className="w-full h-full"
        slidesPerView={1}
        pagination={{
          dynamicBullets: true,
        }}
      >
        {Project()}
      </Swiper>

      <div className="w-full absolute top-[30%] bg-secondary opacity-30 left-0 h-[400px] md:h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
