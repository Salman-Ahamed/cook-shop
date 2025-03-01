import { ListItem } from "@/components/shared";
import { Card } from "@/components/shared/card";
import { IRecipe } from "@/interface";
import { recipes } from "@/lib/data";
import Image from "next/image";

const FavoritesPage = () => {
  const data: IRecipe[] = []; // recipes.slice(0, 6);

  return (
    <div className="pb-5 sm:pb-40">
      {data.length > 0 ? (
        <ListItem isFavorite data={data} />
      ) : (
        <div className="flex flex-col w-full h-[55svh] sm:h-[60svh] justify-center items-start gap-[18px]">
          <div className="flex flex-1 flex-col justify-center items-center gap-y-[18px] w-full">
            <Image alt="no data" src="/fav.svg" width={85} height={85} />
            <p className="text-center text-2xl text-[#656565] font-semibold max-w-[250px]">
              You don&apos;t have any favorite recipes yet.
            </p>
          </div>

          <div
            className="w-full max-w-[95vw] sm:max-w-[40vw] md:max-w-[50vw] lg:max-w-[65vw] 2xl:max-w-[70vw] 
          overflow-hidden overflow-x-scroll px-2.5 mx-auto scroll-smooth"
          >
            <h3 className="text-xs text-primary font-semibold">
              Some suggestions for you
            </h3>
            <div className="flex justify-start items-center gap-3 w-[941px] sm:h-[220px] pt-5">
              {recipes.slice(0, 6).map((item) => (
                <Card isSuggestion key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
