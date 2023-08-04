import React from "react";
import { twMerge } from "tailwind-merge";

interface Prop {
  className?: string;
}

function ExperienceCard({ className }: Prop) {
  return (
    <article
      className={twMerge(
        "flex h-full flex-col  rounded-lg items-center justify-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10  transition-all duration-500 overflow-hidden",
        className
      )}
    >
      ExperienceCard
    </article>
  );
}

export default ExperienceCard;
