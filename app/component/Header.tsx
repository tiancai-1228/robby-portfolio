import React from "react";
import { useTranslations } from "next-intl";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

function Header() {
  const t = useTranslations();
  return (
    <div className="z-50 flex justify-between items-start  sticky top-0 p-5 max-w-7xl mx-auto xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SocialIcon
          network="instagram"
          bgColor="rgb(36,36,36)"
          fgColor="#fff"
        />
        <SocialIcon
          network="instagram"
          bgColor="rgb(36,36,36)"
          fgColor="#fff"
        />
        <SocialIcon
          network="instagram"
          bgColor="rgb(36,36,36)"
          fgColor="#fff"
        />
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="text-white"
      >
        <SocialIcon network="email" bgColor="rgb(36,36,36)" fgColor="#fff" />
        {t("HOLLOW")}
      </motion.div>
    </div>
  );
}

export default Header;
