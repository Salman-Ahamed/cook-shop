import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "./button";

type TProps = { isEdit: boolean };

export const UserSidebar: FC<TProps> = (props) => {
  return (
    <div
      className={cn(
        "w-full md:max-w-[250px] xl:max-w-[373px] h-[65svh] hidden sm:flex flex-col items-center justify-center bg-gradient-to-l to-primary via-[#FF7A00]/30 from-transparent p-5",
        props.isEdit && "max-w-[373px] md:max-w-[373px] h-[80svh]"
      )}
    >
      <div className="-mt-20">
        <Profile {...props} />
      </div>
    </div>
  );
};

export const Profile: FC<TProps> = ({ isEdit }) => (
  <div className="flex flex-col items-center justify-center gap-2 sm:gap-9">
    <Image
      alt="logo"
      src="/demo-user.png"
      width={256}
      height={256}
      className="rounded-full size-[100px] sm:size-[256px]"
    />
    {isEdit ? (
      <div className="flex justify-center items-center gap-0.5 sm:gap-4 flex-wrap">
        <Button className="py-1 px-3 sm:py-3.5 sm:px-6" isSecondary>
          Remove
        </Button>
        <Button className="py-1 px-3 sm:py-3.5 sm:px-6">Change</Button>
      </div>
    ) : (
      <div className="flex flex-col justify-center items-center w-full gap-1.5 sm:gap-2.5 text-[#2D3748]">
        <h5 className="text-sm sm:text-2xl">Maria Clara</h5>
        <Link href="/profile/edit">
          <button className="border border-[#999999] px-2.5 py-0.5 sm:py-1 rounded-[5px] text-[11px] sm:text-sm">
            Editor
          </button>
        </Link>
      </div>
    )}
  </div>
);
