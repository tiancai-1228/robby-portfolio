import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "../card/Experience.card";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import useScrollCard from "@/app/hook/useScrollCard";

const Experience = () => {
  const windowWidth = window.innerWidth;

  const {
    listRef,
    current,
    handleOnScroll,
    handleScrollRight,
    handleScrollLeft,
  } = useScrollCard({ cardLength: 3 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true }}
      className="mt-[1px]   h-screen relative flex flex-col justify-center items-center  max-w-7xl mx-auto px-10 "
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-semibold">
        Experience
      </h3>

      <div className="w-full absolute h-[60%]  flex  ">
        {windowWidth > 768 && (
          <div className=" absolute h-full left-0 flex justify-center items-center w-10">
            <LeftOutlined
              className="text-4xl cursor-pointer text-secondary z-30"
              onClick={handleScrollLeft}
            />
          </div>
        )}

        <div
          ref={listRef}
          onScroll={handleOnScroll}
          className="w-full h-full  flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory"
        >
          <ExperienceCard
            className={current == 0 ? "opacity-100" : "opacity-40"}
          />
          <ExperienceCard
            className={current == 1 ? "opacity-100" : "opacity-40"}
          />
          <ExperienceCard
            className={current == 2 ? "opacity-100" : "opacity-40"}
          />
        </div>

        {windowWidth > 768 && (
          <div className=" absolute right-0 h-full flex justify-center items-center w-10">
            <RightOutlined
              className="text-4xl cursor-pointer text-secondary z-30"
              onClick={handleScrollRight}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Experience;
