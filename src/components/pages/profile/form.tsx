import { Button } from "@/components/shared/button";
import Image from "next/image";

export const Form = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-y-2">
      <input
        type="text"
        placeholder="Write the name of your recipe..."
        className="text-sm py-6 px-2.5 text-[#B6B6B6] focus:outline-none border-b border-[#B6B6B6] w-full"
      />
      <div className="w-full relative border-b border-[#B6B6B6]">
        <input
          type="text"
          placeholder="Write the name of your recipe..."
          className="text-sm py-6 px-2.5 text-[#B6B6B6] focus:outline-none w-full"
        />
        <Image
          alt="arrow"
          src="/arrow-r.svg"
          width={10}
          height={20}
          className="absolute right-6 top-1/2 -translate-y-1/2"
        />
      </div>

      <input
        type="text"
        placeholder="Preparation time:"
        className="text-sm py-6 px-2.5 text-[#B6B6B6] focus:outline-none border-b border-[#B6B6B6] w-full"
      />
      <input
        type="text"
        placeholder="Recipe origin:"
        className="text-sm py-6 px-2.5 text-[#B6B6B6] focus:outline-none border-b border-[#B6B6B6] w-full"
      />
      <textarea
        placeholder="Write the description of your recipe..."
        className="text-sm py-6 px-2.5 text-[#B6B6B6] focus:outline-none border-b border-[#B6B6B6] w-full"
      />

      <Button className="px-20 mt-12 bg-[#9C4B00]">To share</Button>
    </div>
  );
};
