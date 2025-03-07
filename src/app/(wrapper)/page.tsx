"use client";

import { Listing, OnlySearch } from "@/components/pages/home";
import { Footer } from "@/components/shared";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const HomePage = () => {
  const searchParams = useSearchParams();
  const items = searchParams.getAll("category");
  const search = searchParams.get("search");

  return items?.length > 0 ? (
    <Listing items={items} search={search} />
  ) : (
    <>
      <main className="flex flex-1 items-center justify-center w-full flex-col px-2.5 gap-2.5 overflow-x-hidden">
        <figure className="pb-2.5">
          <Image alt="logo" src="/logo.svg" width={137} height={136} />
        </figure>

        <OnlySearch />
      </main>
      <Footer className="sm:hidden block" />
    </>
  );
};

export default HomePage;
