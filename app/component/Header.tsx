"use client";

import React from "react";
import Email from "../image/email.png";
import { motion } from "framer-motion";
import { I_social } from "../service/interface";
import Link from "next/link";
import { urlFor } from "../service/client";

interface Prop {
  socials: I_social[];
}

function Header({ socials }: Prop) {
  const renderSocials = () => {
    return socials?.map((social) => (
      <Link key={social._id} target="_blank" href={social.url}>
        <img
          src={urlFor(social.image).url()}
          alt={social.title}
          className="w-8 h-8 object-cover mx-2"
        />
      </Link>
    ));
  };

  return (
    <div className="z-50 flex justify-between items-start  sticky top-0 p-5 max-w-7xl mx-auto xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex"
      >
        {renderSocials()}
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="text-white"
      >
        <Link href={"#Contact"} className="flex justify-center items-center">
          <img
            src={Email.src}
            alt={"CONTACT me"}
            className="w-8 h-8 object-cover mx-2"
          />
          <p className=" hidden uppercase md:inline-flex text-sm font-semibold text-gray-500">
            CONTACT ME
          </p>
        </Link>
      </motion.div>
    </div>
  );
}

export default Header;
