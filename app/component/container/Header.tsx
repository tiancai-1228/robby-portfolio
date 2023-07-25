import React from "react";
import { useTranslations } from "next-intl";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

function Header() {
  const t = useTranslations();
  return (
    <div>
      <SocialIcon network="instagram" bgColor="#3C4042" fgColor="#fff" />
      <SocialIcon network="instagram" bgColor="#3C4042" fgColor="#fff" />
      <SocialIcon network="instagram" bgColor="#3C4042" fgColor="#fff" />
      <SocialIcon network="email" bgColor="#3C4042" fgColor="#fff" />
      <Link href={`/en`}>{t("HOLLOW")}</Link>
    </div>
  );
}

export default Header;
