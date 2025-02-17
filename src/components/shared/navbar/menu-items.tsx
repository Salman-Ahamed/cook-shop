import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItemClass =
  "text-sm active:font-medium pb-5 lg:pb-[24px] inline-block ";
export const MenuItems = () => {
  const pathName = usePathname();

  return (
    <div className="hidden md:flex justify-between items-center gap-5">
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
  );
};

const navItems = [
  { label: "HOME", link: "/" },
  { label: "FAVORITES", link: "/favorites" },
  { label: "PROFILE", link: "/profile" },
];
