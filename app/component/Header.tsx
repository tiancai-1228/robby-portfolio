import React from "react";
import { useTranslations } from "next-intl";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import config from "../config";

function Header() {
  return (
    <div className="z-50 flex justify-between items-start  sticky top-0 p-5 max-w-7xl mx-auto xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Link target="_blank" href={config.github}>
          <SocialIcon network="github" bgColor="rgb(36,36,36)" fgColor="#fff" />
        </Link>

        <Link target="_blank" href={config.instagram}>
          <SocialIcon
            network="instagram"
            bgColor="rgb(36,36,36)"
            fgColor="#fff"
          />
        </Link>

        <Link target="_blank" href={config.linkedin}>
          <SocialIcon
            network="linkedin"
            bgColor="rgb(36,36,36)"
            fgColor="#fff"
          />
        </Link>
      </motion.div>

      <Link href={"#Contact"}>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-white"
        >
          <SocialIcon network="email" bgColor="rgb(36,36,36)" fgColor="#fff" />
          <p className=" hidden uppercase md:inline-flex text-sm font-semibold text-gray-500">
            CONTACT ME
          </p>
        </motion.div>
      </Link>
    </div>
  );
}

export default Header;
