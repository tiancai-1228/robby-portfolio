import useScrollCard from "@/app/hook/useScrollCard";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import React from "react";

const Projects = () => {
  const projects = [0, 1, 2, 3, 4, 5, 6];
  const {
    listRef,
    current,
    handleOnScroll,
    handleScrollRight,
    handleScrollLeft,
  } = useScrollCard({ cardLength: projects.length });

  const Project = () => {
    return projects.map((el) => (
      <div
        key={el}
        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
      >
        {el}
      </div>
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
      className="mt-[1px] h-screen relative flex flex-col justify-center items-center  max-w-full mx-auto px-10 "
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-semibold">
        Project
      </h3>
      <div className=" absolute  left-0 h-full flex justify-center items-center w-10 ml-0 lg:ml-40  ">
        <LeftOutlined
          className="text-4xl cursor-pointer text-secondary z-30"
          onClick={handleScrollLeft}
        />
      </div>

      <div
        ref={listRef}
        onScroll={handleOnScroll}
        className=" relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 "
      >
        {Project()}
      </div>

      <div className=" absolute right-0 h-full flex justify-center items-center w-10 mr-0 lg:mr-40">
        <RightOutlined
          className="text-4xl cursor-pointer text-secondary z-30"
          onClick={handleScrollRight}
        />
      </div>

      <div className="w-full absolute top-[30%] bg-secondary opacity-30 left-0 h-[400px] md:h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
