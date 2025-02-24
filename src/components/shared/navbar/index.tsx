"use client";

import Image from "next/image";
import { useState } from "react";
import { Logo } from "./logo";
import { MenuItems } from "./menu-items";
import { MobileMenu } from "./mobile-menu";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-fredoke relative">
      <nav className="flex justify-between  items-center w-full max-w-[1366px] mx-auto px-5 sm:px-10 lg:px-20 pt-[30px] gap-2.5">
        <Logo />

        <MenuItems />
        <MobileMenu open={open} setOpen={setOpen} />

        <figure className="block md:hidden pb-6" onClick={() => setOpen(!open)}>
          <Image
            alt="nav-menu"
            src="/menu.svg"
            className="w-[25px] h-auto"
            width={25}
            height={17}
          />
        </figure>
      </nav>
      <hr className="bg-[#D2D2D2]" />
    </div>
  );
};
