import { IChildrenClassName } from "@/interface";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

const Item: FC<IChildrenClassName> = ({ children, className }) => (
  <div className={cn("flex items-end gap-[15px] flex-col", className)}>
    <p className="text-sm">{children}</p>
    <hr className="w-[183px] bg-[#C2C2C2]" />
  </div>
);

export const Footer = () => {
  const items = [
    { label: "Who we are", link: "/" },
    { label: "terms", link: "/" },
    { label: "privacy", link: "/" },
    { label: "Contact us", link: "/" },
  ];
  return (
    <footer className="w-fit justify-center items-center flex-col gap-2.5 flex mx-auto text-[#494949] font-poppins">
      <div className="flex justify-between gap-20 items-end">
        <Item>© 2023 Cookshow</Item>
        <p className="-mb-2.5 text-base">Cook your way</p>
        <Item className="items-start">All rights reserved</Item>
      </div>
      <div className="flex justify-between items-center gap-2.5 w-full py-2.5 pb-5">
        {items.map(({ label, link }) => (
          <Link key={label} className="text-[13px]" href={link}>
            {label}
          </Link>
        ))}
      </div>
    </footer>
  );
};
