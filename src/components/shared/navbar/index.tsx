import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const navItems = [
    {
      label: "HOME",
      link: "/",
    },
    {
      label: "FAVORITES",
      link: "/favorites",
    },
    {
      label: "PROFILE",
      link: "/profile",
    },
  ];

  const linkClass = "text-sm active:font-medium";

  return (
    <div className="font-fredoke">
      <nav className="flex justify-between items-center w-full max-w-[1366px] mx-auto px-20 pt-[30px] pb-[20px] gap-2.5">
        <div>
          <Image
            alt="logo"
            src="/logo.png"
            className="w-[200px] h-auto"
            width={200}
            height={20}
          />
        </div>
        <div className="flex justify-between items-center gap-5">
          <div className="space-x-[75px]">
            {navItems.map(({ label, link }) => (
              <Link className={linkClass} href={link}>
                {label}
              </Link>
            ))}
          </div>
          <button className={linkClass}>LOGOUT</button>
        </div>
      </nav>
      <hr className="bg-[#D2D2D2]" />
    </div>
  );
};
