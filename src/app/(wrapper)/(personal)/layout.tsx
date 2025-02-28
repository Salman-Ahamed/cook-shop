import { Header, UserSidebar } from "@/components/shared";
import { IChildren } from "@/interface";
import { FC } from "react";

const PersonalLayout: FC<IChildren> = ({ children }) => (
  <div className="flex-1 flex gap-[69px] font-poppins">
    <UserSidebar />
    <div className="space-y-3 w-full">
      <Header />
      {children}
    </div>
  </div>
);

export default PersonalLayout;
