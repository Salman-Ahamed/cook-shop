import { HomeSearch } from "@/components/pages/home";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-[79.2svh] w-full flex-col px-2.5 gap-2.5">
      <figure className="pb-2.5">
        <Image alt="logo" src="/logo.svg" width={137} height={136} />
      </figure>

      <HomeSearch />
    </div>
  );
};

export default HomePage;
