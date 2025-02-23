"use client";

import { useSearch } from "@/hooks/use-search";
import Image from "next/image";
import { useEffect } from "react";

export const ListingSearch = () => {
  const { items, search, addItem, setSearch, removeItem, handleSearch } =
    useSearch();

  useEffect(() => handleSearch(), [items]);

  return (
    <div className="relative z-10 text-white pt-7 pb-8 w-full max-w-[706px] mx-auto px-2.5 md:px-0">
      <div className="border-[#B3B3B3] border-2 bg-white flex justify-between w-full px-[8px] py-[5px] rounded-[10px] gap-1">
        <Image
          alt="search"
          src="/search.svg"
          className="min-w-fit"
          width={17}
          height={14}
        />
        <input
          type="search"
          className="w-full focus:outline-none bg-transparent text-[#B8B8B8] text-xs"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addItem()}
        />
        <Image
          alt="microphone"
          src="/microphone.png"
          width={12}
          height={15}
          className="min-w-fit"
        />
      </div>
      <div className="flex gap-1.5 mt-2.5 w-full md:flex-wrap overflow-x-scroll md:overflow-x-auto pb-2.5">
        {items.map((item) => (
          <div
            key={item}
            className="bg-primary text-white py-1 text-sm px-2 rounded-full flex justify-center items-center gap-1.5 min-w-fit"
          >
            <span>#{item}</span>
            <button onClick={() => removeItem(item)}>
              <Image alt="close" src="/close.svg" width={12} height={12} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
