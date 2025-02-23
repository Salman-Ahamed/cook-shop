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

    <div className="w-full max-w-screen-lg mx-auto px-2.5 md:px-0 grid grid-cols-3 place-items-center gap-5 pt-11">
      <div className="w-full max-w-[240px] h-auto min-h-[375px] max-h-[381px] flex flex-col font-poppins">
        <div className="flex-1">
          <figure>
            <Image
              alt="Banner"
              src="/item-1.png"
              width={240}
              height={180}
              sizes="100%"
              className="w-full h-auto rounded-[8px]"
            />
          </figure>
          {/* Body Section */}
          <div className="pt-2">
            <h3 className="text-[#9C4B00] font-medium">Crazy Meat</h3>
            <h5 className="text-[#999999] text-sm">ITALIAN</h5>
            <div className="flex justify-between items-center gap-1.5">
              <p>Fabiana</p>
              <div className="flex gap-1.5">
                <Image alt="clock" src="/clock.svg" width={12} height={12} />
                <span>0h50min</span>
              </div>
            </div>
            <desc className="text-[14px] leading-[22px] text-[#A5A5A5] w-full">
              “Its origin is Italian, related to carne lessa, a recipe based
              on...”
            </desc>
          </div>
        </div>
        {/* Footer Section */}
        <div className="flex justify-between items-center">
          <div>
            <Image alt="Favorite" src="/love-fill.svg" width={23} height={21} />
          </div>
          <div className="flex -space-x-2.5 relative">
            <Image alt="Favorite" src="/parson-1.png" width={23} height={23} />
            <Image alt="Favorite" src="/parson-2.png" width={23} height={23} />
            <Image alt="Favorite" src="/parson-3.png" width={23} height={23} />
            <div className="size-6 shadow-md rounded-full bg-[#FDFDFD] text-[#A8A8A8] flex justify-center items-center text-[11px]">
              <span>+50</span>
            </div>

            <Image
              className="absolute -bottom-1 right-0"
              alt="love"
              src="/love.png"
              width={10}
              height={10}
            />
          </div>
        </div>
      </div>
    </div>
  </main>
);
