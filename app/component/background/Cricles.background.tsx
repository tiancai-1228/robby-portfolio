import React from "react";
import { motion } from "framer-motion";

function CriclesBackground() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 1.5 }}
      className=" relative flex justify-center items-center"
    >
      <div className=" absolute border  border-[#303030] rounded-full h-[100px]  w-[100px] md:h-[200px] md:w-[200px]  animate-ping mt-52" />
      <div className=" absolute border  border-[#303030] rounded-full h-[150px] w-[150px] md:h-[300px] md:w-[300px]  mt-52 opacity-50" />
      <div className=" absolute border  border-[#303030] rounded-full h-[250px] w-[250px] md:h-[500px] md:w-[500px]  mt-52 opacity-50" />
      <div className=" absolute border  border-secondary rounded-full h-[320px] w-[320px] md:h-[650px] md:w-[650px]  opacity-20 mt-52 " />
      <div className=" absolute border  border-[#303030] rounded-full h-[400px] w-[400px] md:h-[800px] md:w-[800px]  mt-52 opacity-50" />
    </motion.div>
  );
}

export default CriclesBackground;
