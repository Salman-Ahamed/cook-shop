import { OnlySearch } from "@/components/pages/home";
import Image from "next/image";

const HomePage = () => {
  return (
    <main className="flex-1 flex items-center justify-center w-full flex-col">
      <div className="flex items-center justify-center w-full flex-col px-2.5 gap-2.5">
        <figure className="pb-2.5">
          <Image alt="logo" src="/logo.svg" width={137} height={136} />
        </figure>

        <OnlySearch />
      </div>
    </main>
  );
};

export default HomePage;
