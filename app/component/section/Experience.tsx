"use client";

import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "../card/Experience.card";
import { I_experience } from "@/app/service/interface";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

interface Prop {
  experience: I_experience[];
}

const Experience = ({ experience }: Prop) => {
  const renderExperience = () => {
    return experience.map((el) => (
      <SwiperSlide key={el._id}>
        <ExperienceCard key={el._id} experience={el} />
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
      className="mt-[1px] h-screen relative flex flex-col justify-end items-center  max-w-6xl mx-auto px-0 md:p-10 overflow-hidden iphoneSE:justify-center"
    >
      <h2 className="absolute iphoneSE:top-24 top-20 uppercase tracking-[20px] text-gray-500 text-2xl font-semibold ">
        Experience
      </h2>

      <Swiper
        modules={[Pagination]}
        className="w-[80%]"
        slidesPerView={1}
        pagination={{
          dynamicBullets: true,
        }}
      >
        {renderExperience()}
      </Swiper>
    </motion.div>
  );
};

export default Experience;
