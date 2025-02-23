import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, FC, SetStateAction } from "react";

type TProps = { open: boolean; setOpen: Dispatch<SetStateAction<boolean>> };

export const MobileMenu: FC<TProps> = ({ open, setOpen }) => {
  const router = useRouter();

  const handleClick = (link: string) => {
    router.push(link);
    setOpen(false);
  };

  return (
    <div
      className={cn(
        "bg-[#9C4B00] md:hidden w-full max-w-[217px] fixed left-0 top-0 h-screen p-5 py-[70px] flex flex-col justify-start items-start gap-[30px] text-white text-[11px] font-poppins transition-all delay-150 z-50",
        open ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <button
        className="flex gap-3.5 focus:outline-none"
        onClick={() => setOpen(false)}
      >
        <Image
          alt="CLOSE"
          src="/menu.svg"
          width={24}
          height={24}
          className="h-auto"
        />
        <span>CLOSE</span>
      </button>
      {items.map(({ label, link, icon }) => (
        <div
          key={label}
          className="flex gap-3.5"
          onClick={() => handleClick(link)}
        >
          <Image
            alt={label}
            src={icon}
            width={24}
            height={24}
            className="h-auto"
          />
          <span>{label}</span>
        </div>
      ))}

      <button className="flex gap-3.5 focus:outline-none">
        <Image
          alt="LOGOUT"
          src="/sair.svg"
          width={24}
          height={24}
          className="h-auto"
        />
        <span>LOGOUT</span>
      </button>
    </div>
  );
};

const items = [
  { label: "FAVORITES", link: "/favorites", icon: "/favoritos.svg" },
  { label: "PROFILE", link: "/profile", icon: "/perfil.svg" },
];
