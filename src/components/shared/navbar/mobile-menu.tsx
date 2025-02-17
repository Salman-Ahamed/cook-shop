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
        "bg-[#9C4B00] w-full max-w-[217px] fixed left-0 top-0 h-screen p-5 py-[70px] flex flex-col justify-start items-start gap-[30px] text-white text-[11px] font-poppins transition-all delay-150",
        open ? "translate-x-0" : "-translate-x-full"
      )}
    >
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
    </div>
  );
};

const items = [
  { label: "FECHAR", link: "/", icon: "/menu.svg" },
  { label: "FAVORITOS", link: "/favorites", icon: "/favoritos.svg" },
  { label: "PERFIL", link: "/profile", icon: "/perfil.svg" },
  { label: "SAIR", link: "/profile", icon: "/sair.svg" },
];
