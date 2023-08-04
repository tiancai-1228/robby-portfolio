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
      <div className=" absolute border  border-[#303030] rounded-full h-[200px] w-[200px]  animate-ping mt-52" />
      <div className=" absolute border  border-[#303030] rounded-full h-[300px] w-[300px] mt-52 opacity-50" />
      <div className=" absolute border  border-[#303030] rounded-full h-[500px] w-[500px] mt-52 opacity-50" />
      <div className=" absolute border  border-secondary rounded-full h-[650px] w-[650px]  opacity-20 mt-52 " />
      <div className=" absolute border  border-[#303030] rounded-full h-[800px] w-[800px] mt-52 opacity-50" />
    </motion.div>
  );
}

export default CriclesBackground;
