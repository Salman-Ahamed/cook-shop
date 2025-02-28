import { IChildrenClassName, IClassName } from "@/interface";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Item: FC<IChildrenClassName> = ({ children, className }) => (
  <div className={cn("flex items-end gap-[15px] flex-col", className)}>
    <p className="text-sm">{children}</p>
    <hr className="w-[183px] bg-[#C2C2C2]" />
  </div>
);

export const Footer: FC<IClassName> = ({ className }) => (
  <footer className={cn("border-t border-[#C2C2C2] w-full", className)}>
    <div className="w-full md:w-fit justify-center items-center flex-col gap-2.5 flex mx-auto text-[#494949] font-poppins pt-2">
      <figure className="flex justify-center items-center gap-1.5 md:hidden">
        <span>© 2023 Cookshow</span>
        <Image
          alt="Footer logo"
          src="/footer-logo.png"
          width={38}
          height={35}
        />
      </figure>
      <div className="flex justify-between gap-5 md:gap-20 items-end w-full md:w-auto px-2.5 md:px-0">
        <Item className="hidden md:flex">© 2023 Cookshow</Item>
        <hr className="w-full bg-[#C2C2C2] block md:hidden" />
        <p className="-mb-2.5 text-base min-w-fit">Cook your way</p>
        <hr className="w-full bg-[#C2C2C2] block md:hidden" />
        <Item className="items-start hidden md:flex">All rights reserved</Item>
      </div>
      <div className="flex justify-between items-center gap-2.5 w-full py-2.5 pb-5 px-2.5 md:px-0">
        {items.map(({ label, link }) => (
          <Link key={label} className="text-[13px]" href={link}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  </footer>
);

const items = [
  { label: "Who we are", link: "/" },
  { label: "terms", link: "/" },
  { label: "privacy", link: "/" },
  { label: "Contact us", link: "/" },
];
