import Image from "next/image";
import { FC } from "react";

interface IProps {
  img: string;
  title: string;
  category: string;
  author: string;
  time: string;
  desc: string;
  peopleCount: number;
  peopleImages: string[];
}

export const Card: FC<IProps> = (props) => {
  const { img, title, category, author, time, desc, peopleCount } = props;

  return (
    <div className="w-full max-w-[240px] h-auto min-h-[375px] max-h-[381px] flex flex-col font-poppins">
      <div className="flex-1">
        <figure>
          <Image
            alt={title}
            src={img}
            width={240}
            height={180}
            sizes="100%"
            className="w-full h-auto rounded-[8px]"
          />
        </figure>
        {/* Body Section */}
        <div className="pt-2">
          <h3 className="text-[#9C4B00] font-medium">{title}</h3>
          <h5 className="text-[#999999] text-sm">{category}</h5>
          <div className="flex justify-between items-center gap-1.5">
            <p>{author}</p>
            <div className="flex gap-1.5">
              <Image alt="clock" src="/clock.svg" width={12} height={12} />
              <span>{time}</span>
            </div>
          </div>
          <desc className="text-[14px] leading-[22px] text-[#A5A5A5] w-full">
            “{desc}”
          </desc>
        </div>
      </div>
      {/* Footer Section */}
      <div className="flex justify-between items-center">
        <div>
          <Image alt="Favorite" src="/love-fill.svg" width={23} height={21} />
        </div>
        <div className="flex -space-x-2.5 relative">
          {props.peopleImages.map((item) => (
            <Image alt="Favorite" src={item} width={23} height={23} />
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
    </div>
  );
};
