import { IRecipe } from "@/interface";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { Card } from "./card";

type TProps = { data: IRecipe[]; isProfile?: boolean; isFavorite?: boolean };

export const ListItem: FC<TProps> = ({ data, isProfile, isFavorite }) => (
  <div
    className={cn(
      "w-full max-w-screen-lg mx-auto px-2.5 xl:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-1 sm:gap-5 ",
      isProfile
        ? "sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
        : "sm:grid-cols-2 md:grid-cols-3 sm:gap-y-28"
    )}
  >
    {data.map((item) => (
      <Card
        key={item.id}
        isFavorite={isFavorite}
        isProfile={isProfile}
        {...item}
      />
    ))}
  </div>
);
