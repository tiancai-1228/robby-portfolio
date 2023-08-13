"use client";

import React from "react";
import { PhoneIcon } from "@heroicons/react/20/solid";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import { I_pageInfo } from "@/app/service/interface";

interface Input {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Prop {
  pageInfo: I_pageInfo;
}

const Contact = ({ pageInfo }: Prop) => {
  const { register, handleSubmit, reset } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (val) => {
    const { name, email, subject, message } = val;
    window.location.href = `mailto:sky0975657713@gmail.com?subject=${subject}&body=Hi I'm ${name}. ${message} (${email})`;
    reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true }}
      className="mt-[1px] h-screen relative flex flex-col justify-center items-center  max-w-6xl mx-auto px-0 md:p-10 overflow-hidden"
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-semibold">
        Contact
      </h3>

      <div className="space-y-4 iphoneSE:space-y-10 w-full flex flex-col justify-center items-center mt-[140px] iphoneSE:mt-0 ">
        <h4 className="text-xl md:text-4xl font-semibold text-center p-4 md:p-0 ">
          Any questions or suggestions welcome to contact me
        </h4>

        <div className="space-y-2 iphoneSE:space-y-10 ">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className=" text-secondary h-7 w-7 animate-pulse" />
            <p className="text-base md:text-2xl">{pageInfo.Phone}</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className=" text-secondary h-7 w-7 animate-pulse" />
            <p className="text-base md:text-2xl">{pageInfo.email}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 xl:space-y-4 w-full iphoneSE:mx-auto  px-4"
        >
          <div className="flex space-x-2 ">
            <input
              {...register("name")}
              className="contactInput"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email")}
              className="contactInput"
              type="text"
              placeholder="Email"
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder="Subject"
          />
          <input
            {...register("message")}
            className="contactInput"
            type="text"
            placeholder="Message"
          />

          <button
            type="submit"
            className=" bg-secondary py-3 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
