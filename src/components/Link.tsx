import React from "react";
import Link from "next/link";
import * as Icon from "lucide-react";

interface IconLinkProps {
  href: string;
  icon: keyof typeof Icon;
  children: React.ReactNode;
}

const IconLink: React.FC<IconLinkProps> = ({ href, icon, children }) => {
  const IconInc = Icon[icon] as React.ElementType;

  return (
    <Link
      aria-label="projects"
      href={href}
      passHref
      target="_blank"
      className="hover:underline flex flex-row cursor-pointer"
    >
      <IconInc className="mr-2" />
      <div className="z-50">{children}</div>
    </Link>
  );
};

export default IconLink;
