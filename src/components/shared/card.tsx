import { IClassName, IRecipe } from "@/interface";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

type TProps = IRecipe & { isProfile?: boolean; isSuggestion?: boolean };
export const Card: FC<TProps> = (props) => {
  const { img, title, category, author, time, desc, ...oth } = props;
  const { peopleCount, ratting, isProfile, isSuggestion } = oth || {};

  const isMy = isProfile || isSuggestion;

  const descriptionClass = "text-[14px] leading-[22px] text-[#A5A5A5] w-full";

  return (
    <div
      className={cn(
        "flex sm:flex-col font-poppins border-t sm:border-t-0 border-[#DBDBDB] gap-2 sm:gap-0",
        "w-full h-auto",
        isSuggestion
          ? "sm:max-w-[146px] sm:min-h-[200px] max-h-[200px]"
          : "sm:max-w-[240px] sm:min-h-[375px] max-h-[381px]"
      )}
    >
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
            className={cn(
              "w-full h-[180px] rounded-[8px] hidden sm:block",
              isSuggestion && "h-[98px]"
            )}
          />
        </figure>
        {/* Body Section */}
        <div className="pt-2">
          <h3 className="text-[#9C4B00] font-medium text-nowrap overflow-hidden overflow-ellipsis">
            {title}
          </h3>
          <h5 className="text-[#999999] text-sm">{category}</h5>
          {!isSuggestion && (
            <div className="flex justify-start  sm:justify-between  items-center gap-5 sm:gap-1.5">
              {!isProfile && <p>{author}</p>}
              <div className="flex gap-1.5">
                <Image alt="clock" src="/clock.svg" width={12} height={12} />
                <span>{time}</span>
              </div>
            </div>
          )}
          <desc className={cn(descriptionClass, "sm:block hidden")}>
            “
            {desc.length > (isMy ? 15 : 55)
              ? `${desc.slice(0, isMy ? 15 : 55)}...`
              : desc}
            ”
          </desc>
          <desc className={cn(descriptionClass, "sm:hidden block")}>
            “{desc.length > 20 ? `${desc.slice(0, 20)}...` : desc}”
          </desc>
        </div>

        <CardFooter
          isMy={isMy}
          images={props.peopleImages}
          peopleCount={peopleCount}
          className="flex sm:hidden"
        />
      </div>
      {/* Footer Section */}
      <CardFooter
        isMy={isMy}
        images={props.peopleImages}
        peopleCount={peopleCount}
        className="hidden sm:flex"
      />
      <div className=" sm:hidden size-6 mt-3 min-w-6 rounded-full bg-primary text-white text-[11px] flex justify-center items-center">
        {ratting}
      </div>
    </div>
  );
};

type FProps = { images: string[]; peopleCount: number; isMy?: boolean };
const CardFooter: FC<FProps & IClassName> = (props) => {
  const { images, peopleCount, isMy, className } = props;

  const userData = [
    { img: "/profile-love.svg", total: 41 },
    { img: "/comments.svg", total: 19 },
    { img: "/star.svg", total: 4.8 },
  ];

  return (
    <div className={cn("flex justify-between items-center", className)}>
      {isMy ? (
        userData.map((item) => (
          <div className="flex items-center gap-1" key={item.img}>
            <Image alt="Favorite" src={item.img} width={23} height={21} />
            <span className="text-xs text-[#A8A8A8]">{item.total}</span>
          </div>
        ))
      ) : (
        <>
          <div className="hidden sm:block">
            <Image alt="Favorite" src="/love-fill.svg" width={23} height={21} />
          </div>
          <div className="flex -space-x-2.5 relative">
            {images.map((item) => (
              <Image
                alt="Favorite"
                key={item}
                src={item}
                width={23}
                height={23}
              />
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
        </>
      )}
    </div>
  );
};
