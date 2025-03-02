import { Modal } from "@/components/shared";
import { recipes } from "@/lib/data";
import Image from "next/image";
import { FC } from "react";
import { Tags } from "../pages/home/listing-search";

type TProps = { isOpen: boolean; onClose: () => void };
export const ViewItem: FC<TProps> = (props) => {
  const recipe = recipes[0];

  const tags = ["veg", "non-veg", "vegan", "gluten-free"];

  return (
    <Modal
      {...props}
      className="bg-gradient-to-r from-primary via-orange-100 to-white font-poppins pb-7"
    >
      <div className="flex justify-between items-start gap-5 border-b border-[#D1C0C0]">
        <div>
          <Image
            alt="add"
            src={recipe.img}
            width={350}
            height={350}
            className="size-[250px]  lg:size-[350px] rounded-full"
          />
        </div>
        <div>
          <h1 className="text-[30px] font-medium text-[#9C4B00]">
            {recipe.title}{" "}
          </h1>
          <h3 className="text-[22px] text-[#999999]">{recipe.category}</h3>
          <p className="text-[25px] text-[#474747]">{recipe.author}</p>
          <div className="flex gap-1.5">
            <Image alt="clock" src="/clock.svg" width={12} height={12} />
            <span>{recipe.time}</span>
          </div>

          <div className="flex justify-start items-center gap-2 py-5">
            {Array.from(Array(5).keys()).map((el) => (
              <Image
                key={el}
                src={"/star-fill.svg"}
                alt=""
                width={22}
                height={22}
              />
            ))}
            <span className="ps-2">{recipe.ratting}</span>
          </div>
          <div className=" w-full flex justify-start items-center gap-1">
            {tags.map((item) => (
              <Tags item="veg" key={item} onClick={() => {}} />
            ))}
          </div>

          <div className="flex -space-x-2.5 relative mt-10 w-fit">
            {recipe.peopleImages.map((item) => (
              <Image
                alt="Favorite"
                key={item}
                src={item}
                width={23}
                height={23}
              />
            ))}
            <div className="size-6 shadow-md rounded-full bg-[#FDFDFD] text-[#A8A8A8] flex justify-center items-center text-[11px]">
              <span>+{recipe.peopleCount}</span>
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

      <div className="pt-2.5 space-y-10">
        <p className="text-white text-2xl max-w-[338px]">“ {recipe.desc} ”</p>

        <div className="flex justify-end items-center border-t border-[#C5C5C5] pt-7 gap-3.5">
          <Image
            alt="add"
            src="/love-outline.svg"
            width={25}
            height={25}
            className=""
          />
          <p className="text-[#A5A5A5] text-xl">
            Ver todos os 35 comentários...
          </p>
        </div>
      </div>
    </Modal>
  );
};
