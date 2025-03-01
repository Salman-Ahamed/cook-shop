import { ListItem } from "@/components/shared";
import { IRecipe } from "@/interface";
import { recipes } from "@/lib/data";
import Image from "next/image";

const ProfilePage = () => {
  const data: IRecipe[] = recipes.slice(0, 6);

  return (
    <div className="pb-5 sm:pb-40 sm:relative">
      <button className="fixed right-6 bottom-[45px] sm:top-[50%] bg-gradient-to-t from-[#FF7A00] to-[#9C4B00] size-[45px] rounded-[10px] flex justify-center items-center">
        <Image alt="add" src="/plus.svg" width={15} height={15} />
      </button>
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
