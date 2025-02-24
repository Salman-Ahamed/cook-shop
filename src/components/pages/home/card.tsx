import { IClassName, IRecipe } from "@/interface";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

export const Card: FC<IRecipe> = (props) => {
  const { img, title, category, author, time, desc, peopleCount, ratting } =
    props;

  const CardFooter: FC<IClassName> = ({ className }) => (
    <div className={cn("flex justify-between items-center", className)}>
      <div className="hidden sm:block">
        <Image alt="Favorite" src="/love-fill.svg" width={23} height={21} />
      </div>
      <div className="flex -space-x-2.5 relative">
        {props.peopleImages.map((item) => (
          <Image alt="Favorite" key={item} src={item} width={23} height={23} />
        ))}
        <div className="size-6 shadow-md rounded-full bg-[#FDFDFD] text-[#A8A8A8] flex justify-center items-center text-[11px]">
          <span>+{peopleCount}</span>
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
  );

  const descriptionClass = "text-[14px] leading-[22px] text-[#A5A5A5] w-full";

  return (
    <div className="w-full sm:max-w-[240px] h-auto sm:min-h-[375px] max-h-[381px] flex sm:flex-col font-poppins border-t sm:border-t-0 border-[#DBDBDB] gap-2 sm:gap-0">
      <figure>
        <Image
          alt={title}
          src={img}
          width={240}
          height={180}
          className="size-[135px] block sm:hidden"
        />
      </figure>
      <div className="flex-1">
        <figure>
          <Image
            alt={title}
            src={img}
            width={240}
            height={180}
            className="w-full h-[180px] rounded-[8px] hidden sm:block"
          />
        </figure>
        {/* Body Section */}
        <div className="pt-2">
          <h3 className="text-[#9C4B00] font-medium">{title}</h3>
          <h5 className="text-[#999999] text-sm">{category}</h5>
          <div className="flex justify-start  sm:justify-between  items-center gap-5 sm:gap-1.5">
            <p>{author}</p>
            <div className="flex gap-1.5">
              <Image alt="clock" src="/clock.svg" width={12} height={12} />
              <span>{time}</span>
            </div>
          </div>
          <desc className={cn(descriptionClass, "sm:block hidden")}>
            “{desc.length > 55 ? `${desc.slice(0, 55)}...` : desc}”
          </desc>
          <desc className={cn(descriptionClass, "sm:hidden block")}>
            “{desc.length > 20 ? `${desc.slice(0, 20)}...` : desc}”
          </desc>
        </div>

        <CardFooter className="flex sm:hidden" />
      </div>
      {/* Footer Section */}
      <CardFooter className="hidden sm:flex" />
      <div className=" sm:hidden size-6 mt-3 min-w-6 rounded-full bg-primary text-white text-[11px] flex justify-center items-center">
        {ratting}
      </div>
    </div>
  );
};
