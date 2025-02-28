import { ListItem } from "@/components/shared";
import { recipes } from "@/lib/data";
import Image from "next/image";
import { FC } from "react";
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
    <main className="flex-1 pb-32">
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

      <ListItem data={data} />
    </main>
  );
};
