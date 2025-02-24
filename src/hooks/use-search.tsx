"use client";

import { categories } from "@/lib/data";
import { useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

export const useSearch = () => {
  const searchParams = useSearchParams();
  const searchItems = searchParams.getAll("category");
  const searchItem = searchParams.get("search");
  const [items, setItems] = useState<string[]>(searchItems || []);
  const [search, setSearch] = useState(searchItem || "");

  const handleSearch = useCallback(
    (isSearch?: boolean) => {
      const searchParams = new URLSearchParams(window.location.search);

      if (isSearch) {
        searchParams.delete("search");
        search && searchParams.append("search", search.toLowerCase());
        window.history.replaceState(null, "", `?${searchParams.toString()}`);
      } else {
        searchParams.delete("category");
        items.forEach((item) => searchParams.append("category", item));
        window.history.replaceState(null, "", `?${searchParams.toString()}`);
      }
    },
    [items, search]
  );

  type TAdd = { item?: string; isSearch?: boolean };
  const addItem = ({ item, isSearch }: TAdd) => {
    if (!search) return;

    const newItem = (item || search).toLowerCase().trim();
    const exists = items.find((item) => item === newItem);

    if (exists) return setSearch("");
    isSearch ? handleSearch(true) : setItems([...items, newItem]);
    setSearch("");
  };

  const removeItem = (item: string, isSearch?: boolean) => {
    isSearch ? handleSearch(true) : setItems(items.filter((i) => i !== item));
  };

  const getFilteredCategories = () => {
    if (!search) return [];

    const score = categories.map((item) => ({
      text: item,
      score: item.toLowerCase().includes(search.toLowerCase())
        ? item.toLowerCase() === search.toLowerCase()
          ? 2
          : 1
        : 0,
    }));

    const matches = score
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);

    const additional = categories
      .filter(
        (item) => !items.includes(item) && !matches.find((i) => i.text === item)
      )
      .slice(0, Math.max(0, 5 - matches.length));

    return [...matches.map((i) => i.text), ...additional];
  };

  const filteredCategories = getFilteredCategories();
  const bestMatch = filteredCategories[0];

  return {
    items,
    search,
    searchItem,

    setSearch,
    addItem,
    removeItem,
    handleSearch,

    bestMatch,
    filteredCategories,
  };
};
