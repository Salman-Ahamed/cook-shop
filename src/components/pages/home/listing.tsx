import Image from "next/image";
import { ListingSearch } from "./listing-search";

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

    <div>
      <div>Product Card</div>
    </div>
  </main>
);
