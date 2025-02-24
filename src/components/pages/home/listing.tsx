import { recipes } from "@/lib/data";
import Image from "next/image";
import { FC } from "react";
import { Card } from "./card";
import { ListingSearch } from "./listing-search";

type TProps = { items: string[]; search: string | null };
export const Listing: FC<TProps> = ({ items, search }) => {
  const data = recipes
    .filter((item) => items.includes(item.category.toLocaleLowerCase()))
    .filter((item) =>
      search ? item.title.toLowerCase().includes(search) : item
    )
    .slice(0, 6);

  return (
    <main className="flex-1">
      <div className="relative w-full  flex justify-center items-center">
        <Image
          alt="Banner"
          src="/banner.png"
          fill
          sizes="100vw"
          className="object-cover hidden md:block"
        />
        <ListingSearch />
      </div>

      <div className="w-full max-w-screen-lg mx-auto px-2.5 md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-1 sm:gap-5 py-11">
        {data.map((item, i) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
};
