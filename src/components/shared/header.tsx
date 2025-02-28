"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathName = usePathname();

  const items = [
    {
      icon: "/publications.svg",
      label: "Publications",
      link: "/profile",
    },
    {
      icon: "/favoritos.svg",
      label: "Favorites",
      link: "/favorites",
    },
  ];

  return (
    <div className="flex justify-around items-center pt-[22px] pb-5 gap-5 w-full">
      {items.map(({ icon, label, link }) => (
        <Link
          href={link}
          className={cn("flex gap-1.5", pathName === link && "font-medium")}
          key={label}
        >
          <Image alt={label} src={icon} width={22} height={20} />
          {label}
        </Link>
      ))}
    </div>
  );
};
