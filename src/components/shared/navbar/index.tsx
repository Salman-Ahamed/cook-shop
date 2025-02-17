"use client";

import Image from "next/image";
import { useState } from "react";
import { MenuItems } from "./menu-items";
import { MobileMenu } from "./mobile-menu";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-fredoke relative">
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

        <MenuItems />
        {open && <MobileMenu setOpen={setOpen} />}

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
