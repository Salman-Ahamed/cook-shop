"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export const OnlySearch = () => {
  const [items, setItems] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const addItem = (item?: string) => {
    if (!search) return;

    const newItem = (item || search).toLowerCase().trim();
    const exists = items.find((item) => item === newItem);

    if (exists) return setSearch("");
    setItems([...items, newItem]);
    setSearch("");
  };

  const removeItem = (item: string) => {
    setItems(items.filter((i) => i !== item));
  };

  const getFilteredCategories = () => {
    if (!search) return [];

    const score = categories.map((item) => ({
      text: item,
      score: item.includes(search) ? (item === search ? 2 : 1) : 0,
    }));

    const matches = score
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);

    const additional = categories
      .filter((item) => !matches.find((i) => i.text === item))
      .slice(0, Math.max(0, 5 - matches.length));

    return [...matches.map((i) => i.text), ...additional];
  };

  const filteredCategories = getFilteredCategories();
  const bestMatch = filteredCategories[0];

  const handleSearch = () => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.delete("item");
    items.forEach((item) => searchParams.append("item", item));
    window.history.replaceState(null, "", `?${searchParams.toString()}`);
  };

  return (
    <>
      <div className="flex items-center gap-3.5 border border-[#B3B3B3] rounded-t-xl w-full max-w-[706px] px-2.5 py-1.5">
        <button className="focus:outline-none" onClick={handleSearch}>
          <Image alt="logo" src="/search.svg" width={17} height={14} />
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
                  <Image alt="logo" src="/close.svg" width={12} height={12} />
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
          onKeyDown={(e) => e.key === "Enter" && addItem()}
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
                bestMatch === category &&
                  category.includes(search) &&
                  "bg-[#CCCCCC50] border-s border-primary"
              )}
              onClick={() => addItem(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

const categories = [
  "pera",
  "banana",
  "morango",
  "melão",
  "uva",
  "maca",
  "abacaxi",
];
