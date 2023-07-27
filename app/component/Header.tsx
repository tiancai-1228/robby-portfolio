import React from "react";
import { useTranslations } from "next-intl";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

function Header() {
  const t = useTranslations();
  return (
    <div className="bg-primary z-50  flex justify-between items-center  fixed top-0 w-full h-[60px] md:p-10 p-4">
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <SocialIcon network="instagram" bgColor="#3C4042" fgColor="#fff" />
        <SocialIcon network="instagram" bgColor="#3C4042" fgColor="#fff" />
        <SocialIcon network="instagram" bgColor="#3C4042" fgColor="#fff" />
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
        className="text-white"
      >
        <SocialIcon network="email" bgColor="#3C4042" fgColor="#fff" />
        {t("HOLLOW")}
      </motion.div>
    </div>
  );
}

export default Header;
