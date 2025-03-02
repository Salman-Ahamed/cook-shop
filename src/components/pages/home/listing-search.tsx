"use client";

import { useSearch } from "@/hooks/use-search";
import { IClassName } from "@/interface";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC, useEffect } from "react";

type TProps = { item: string; onClick: () => void } & IClassName;
export const Tags: FC<TProps> = ({ item, onClick, className }) => (
  <div
    className={cn(
      "bg-primary text-white py-1 text-sm px-2 rounded-full flex justify-center items-center gap-1.5 min-w-fit",
      className
    )}
  >
    <span>#{item}</span>
    <button onClick={onClick}>
      <Image alt="close" src="/close.svg" width={12} height={12} />
    </button>
  </div>
);

export const ListingSearch = () => {
  const { items, search, searchItem, addItem, ...oth } = useSearch();
  const { setSearch, removeItem, handleSearch } = oth;

  useEffect(() => handleSearch(), [handleSearch, items]);

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
          onKeyDown={(e) => e.key === "Enter" && addItem({ isSearch: true })}
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
        {searchItem && (
          <Tags
            item={searchItem}
            className="bg-orange-600"
            onClick={() => removeItem(searchItem, true)}
          />
        )}
        {items.map((item) => (
          <Tags item={item} key={item} onClick={() => removeItem(item)} />
        ))}
      </div>
    </div>
  );
};
