import { Header, Profile, UserSidebar } from "@/components/shared";
import { IChildren } from "@/interface";
import { FC } from "react";

const PersonalLayout: FC<IChildren> = ({ children }) => (
  <div className="flex-1 flex gap-[69px] font-poppins w-full max-w-[1366px] mx-auto">
    <UserSidebar />
    <div className="sm:space-y-3 w-full">
      <div className="w-full h-[233px] bg-[url('/profile-banner.png')] bg-cover sm:hidden flex justify-center items-center">
        <Profile />
      </div>
      <div className="-mt-[14px]">
        <Header />
      </div>
      {children}
    </div>
  </div>
);

export default PersonalLayout;
