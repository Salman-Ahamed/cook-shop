import { ListItem } from "@/components/shared";
import { Card } from "@/components/shared/card";
import { IRecipe } from "@/interface";
import { recipes } from "@/lib/data";
import Image from "next/image";

const FavoritesPage = () => {
  const data: IRecipe[] = recipes.slice(0, 6);

  return (
    <div className="pb-40">
      {data.length > 0 ? (
        <ListItem data={data} />
      ) : (
        <div className="flex flex-col w-full h-[60svh] justify-center items-center gap-[18px]">
          <div className="flex flex-col justify-center items-center gap-y-[18px] flex-1">
            <Image alt="no data" src="/fav.svg" width={85} height={85} />
            <p className="text-center text-2xl text-[#656565] font-semibold max-w-[250px]">
              You don&apos;t have any favorite recipes yet.
            </p>
          </div>

          <div className="flex justify-center items-center gap-3">
            {recipes.slice(0, 6).map((item) => (
              <Card isSuggestion key={item.id} {...item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
