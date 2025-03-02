import { AddItem } from "@/components/pages/profile";
import { ListItem } from "@/components/shared";
import { IRecipe } from "@/interface";
import { recipes } from "@/lib/data";
import Image from "next/image";

const ProfilePage = () => {
  const data: IRecipe[] = recipes.slice(0, 6);

  return (
    <div className="pb-5 sm:pb-40 sm:relative ">
      <AddItem />
      {data.length > 0 ? (
        <ListItem isProfile data={data} />
      ) : (
        <div className=" flex flex-col w-full h-[50svh] sm:h-[60svh] justify-center items-center gap-[18px]">
          <Image alt="no data" src="/add.svg" width={85} height={85} />
          <p className="text-center text-2xl text-[#656565] font-semibold max-w-[250px]">
            Post your first recipe here!
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
