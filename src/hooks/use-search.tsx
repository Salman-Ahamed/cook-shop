import { categories } from "@/lib/data";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export const useSearch = () => {
  const searchParams = useSearchParams();
  const searchItems = searchParams.getAll("item");
  const [items, setItems] = useState<string[]>(searchItems || []);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.delete("item");
    items.forEach((item) => searchParams.append("item", item));
    window.history.replaceState(null, "", `?${searchParams.toString()}`);
  };

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

  return {
    items,
    search,

    setSearch,
    addItem,
    removeItem,
    handleSearch,

    bestMatch,
    filteredCategories,
  };
};
