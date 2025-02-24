"use client";

import { useSearch } from "@/hooks/use-search";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const OnlySearch = () => {
  const { items, search, addItem, setSearch, removeItem, ...oth } = useSearch();
  const { handleSearch, bestMatch, filteredCategories } = oth;

  return (
    <>
      <div className="flex items-center gap-3.5 border border-[#B3B3B3] rounded-t-xl w-full max-w-[706px] px-2.5 py-1.5">
        <button
          className="focus:outline-none min-w-fit"
          onClick={() => handleSearch()}
        >
          <Image alt="search" src="/search.svg" width={17} height={14} />
        </button>

        {items.length !== 0 && (
          <div className="flex items-center gap-1">
            {items.map((item) => (
              <div
                className="bg-primary text-white py-0.5 text-xs px-2 rounded-full flex justify-center items-center gap-1.5"
                key={item}
              >
                <span> {item}</span>
                <button onClick={() => removeItem(item)}>
                  <Image alt="close" src="/close.svg" width={12} height={12} />
                </button>
              </div>
            ))}
          </div>
        )}
        <input
          type="text"
          placeholder={items.length === 0 ? "Search..." : ""}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && addItem({ item: bestMatch.toLowerCase() })
          }
          className="bg-transparent focus:outline-none text-primary text-xs"
        />
      </div>

      {search && (
        <div className="bg-[#F3F3F3] border border-[#B3B3B3] w-full pb-2.5 max-w-[706px] flex flex-col rounded-b-xl">
          {filteredCategories.map((category) => (
            <button
              key={category}
              className={cn(
                "px-5 py-1.5 hover:bg-[#CCCCCC50] w-full text-start hover:border-s hover:border-primary",
                bestMatch.toLowerCase() === category.toLowerCase() &&
                  category.toLowerCase().includes(search.toLowerCase()) &&
                  "bg-[#CCCCCC50] border-s border-primary"
              )}
              onClick={() => addItem({ item: category.toLowerCase() })}
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </>
  );
};
