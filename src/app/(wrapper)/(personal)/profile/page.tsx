import { ListItem } from "@/components/shared";
import { IRecipe } from "@/interface";
import { recipes } from "@/lib/data";
import Image from "next/image";

const ProfilePage = () => {
  const data: IRecipe[] = recipes.slice(0, 6);

  return (
    <div className="pb-40 relative">
      <button
        className="absolute top-[50%] right-1 bg-gradient-to-t to-[#FF7A00] from-[#9C4B00] rounded-[10px] size-[45px] flex justify-center
       items-center"
      >
        <Image alt="add" src="/plus.svg" width={15} height={15} />
      </button>
      {data.length > 0 ? (
        <ListItem isProfile data={data} />
      ) : (
        <div className=" flex flex-col w-full h-[60svh] justify-center items-center gap-[18px]">
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
