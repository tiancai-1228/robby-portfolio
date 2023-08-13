import { urlFor } from "@/app/service/client";
import { I_experience } from "@/app/service/interface";
import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import moment from "moment";
import Skill from "../Skill";

interface Prop {
  className?: string;
  experience: I_experience;
}

function ExperienceCard({ className, experience }: Prop) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const renderTech = () => {
    return experience.technologies.map((tech, index) => (
      <Skill
        key={tech._id}
        img={urlFor(tech?.image).url()}
        name={tech.title}
        directionLeft={index <= experience.technologies.length / 2}
        isInView={isInView}
        className="w-10 h-10 md:w-14 md:h-14 xl:w-14 xl:h-14 border-0"
      />
    ));
  };

  return (
    <article
      ref={ref}
      className={twMerge(
        "flex flex-col  rounded-lg items-center justify-center space-y-2 md:space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10  transition-all duration-500 overflow-hidden",
        className
      )}
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="w-[100px] h-[100px] rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience.companyImage).url()}
        alt={experience.company}
      />

      <div className="px-0 md:px-10">
        <h3 className="text-base iphoneSE:text-2xl md:text-4xl font-light">
          {experience.jobTitle}
        </h3>
        <p className=" font-bold text-sm iphoneSE:text-xl md:text-2xl  mt-1">
          {experience.company}
        </p>
        <div className="flex space-x-2 my-[1px]">{renderTech()}</div>

        <p className=" uppercase py-2 md:pb-5 text-gray-300">
          {moment(experience.dateStarted).format("YYYY-MM-DD")} ~{" "}
          {experience.isWorkingHere
            ? "Present"
            : moment(experience.dateEnded).format("YYYY-MM-DD")}
        </p>

        <ul className=" list-disc space-y-4 ml-5 text-sm iphoneSE:text-base md:text-lg">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
