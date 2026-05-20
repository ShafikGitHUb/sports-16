"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md transition-all duration-200
        ${
          isActive
            ? "bg-[#00b562] text-white"
            : "hover:bg-[#00b562] hover:text-white"
        }
      `}
    >
      {children}
    </Link>
  );
};

export default NavLink;