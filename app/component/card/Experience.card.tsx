import { urlFor } from "@/app/service/client";
import { I_experience } from "@/app/service/interface";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import moment from "moment";

interface Prop {
  className?: string;
  experience: I_experience;
}

function ExperienceCard({ className, experience }: Prop) {
  const renderTech = () => {
    return experience.technologies.map((tech) => (
      <img
        key={tech._id}
        src={urlFor(tech?.image).url()}
        alt={tech.title}
        className="h-10 w-10 rounded-full"
      />
    ));
  };

  return (
    <article
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
        <h4 className="text-base iphoneSE:text-2xl md:text-4xl font-light">
          {experience.jobTitle}
        </h4>
        <p className=" font-bold text-sm iphoneSE:text-xl md:text-2xl  mt-1">
          {experience.company}
        </p>
        <div className="flex space-x-2 my-[1-px] md:my-2">{renderTech()}</div>

        <p className=" uppercase py-5 text-gray-300">
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
