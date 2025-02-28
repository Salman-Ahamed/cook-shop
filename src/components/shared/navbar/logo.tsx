import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
  <Link href="/" className="pb-5">
    <Image
      alt="logo"
      src="/logo.png"
      className="w-[200px] h-auto"
      width={200}
      height={20}
    />
  </Link>
);
