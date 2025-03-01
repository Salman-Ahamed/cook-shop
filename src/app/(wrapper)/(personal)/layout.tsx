"use client";

import { Header, Profile, UserSidebar } from "@/components/shared";
import { IChildren } from "@/interface";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { FC } from "react";

const PersonalLayout: FC<IChildren> = ({ children }) => {
  const pathName = usePathname();

  const isEdit = pathName === "/profile/edit";

  return (
    <div
      className={cn(
        "flex-1 flex font-poppins w-full max-w-[1366px] mx-auto",
        isEdit ? "gap-5" : "gap-[69px]"
      )}
    >
      <UserSidebar isEdit={isEdit} />
      <div className="sm:space-y-3 w-full">
        <div className="w-full h-[233px] bg-[url('/profile-banner.png')] bg-cover sm:hidden flex justify-center items-center">
          <Profile isEdit={isEdit} />
        </div>
        <div className="sm:space-y-3 w-full -mt-[14px] sm:-mt-0">
          {!isEdit && <Header />}
          {children}
        </div>
      </div>
    </div>
  );
};

export default PersonalLayout;
