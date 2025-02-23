import Image from "next/image";
import { Card } from "./card";
import { ListingSearch } from "./listing-search";

const peopleImages = ["/parson-1.png", "/parson-2.png", "/parson-3.png"];
const item = {
  img: "/item-1.png",
  title: "Crazy Meat",
  category: "ITALIAN",
  author: "Fabiana",
  time: "0h50min",
  desc: "Its origin is Italian, related to carne lessa, a recipe based on...",
  peopleCount: 50,
  peopleImages,
};

export const Listing = () => (
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

    <div className="w-full max-w-screen-lg mx-auto px-2.5 md:px-0 grid grid-cols-3 place-items-center gap-5 pt-11">
      <Card {...item} />
    </div>
  </main>
);
