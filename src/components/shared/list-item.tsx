import { IRecipe } from "@/interface";
import { FC } from "react";
import { Card } from "./card";

type TProps = { data: IRecipe[]; isProfile?: boolean };

export const ListItem: FC<TProps> = ({ data, isProfile }) => (
  <div className="w-full max-w-screen-lg mx-auto px-2.5 md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-1 sm:gap-5 sm:gap-y-28 py-11">
    {data.map((item) => (
      <Card key={item.id} isProfile={isProfile} {...item} />
    ))}
  </div>
);
