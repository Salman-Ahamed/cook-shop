"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathName = usePathname();

  const navItemClass =
    "text-sm active:font-medium pb-5 lg:pb-[24px] inline-block ";

  return (
    <div className="font-fredoke">
      <nav className="flex justify-between  items-center w-full max-w-[1366px] mx-auto px-5 sm:px-10 lg:px-20 pt-[30px] gap-2.5">
        <figure className="pb-5">
          <Image
            alt="logo"
            src="/logo.png"
            className="w-[200px] h-auto"
            width={200}
            height={20}
          />
        </figure>
        <div className="flex justify-between items-center gap-5">
          <div>
            {navItems.map(({ label, link }) => (
              <Link
                className={cn(
                  navItemClass,
                  "px-5 sm:px-5 lg:px-[37.5px]",
                  pathName === link && "font-medium border-b-2 border-[#FF7A00]"
                )}
                href={link}
              >
                {label}
              </Link>
            ))}
          </div>
          <button className={navItemClass}>LOGOUT</button>
        </div>
      </nav>
      <hr className="bg-[#D2D2D2]" />
    </div>
  );
};

const navItems = [
  { label: "HOME", link: "/" },
  { label: "FAVORITES", link: "/favorites" },
  { label: "PROFILE", link: "/profile" },
];
