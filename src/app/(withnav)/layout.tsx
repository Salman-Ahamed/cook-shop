import { Navbar } from "@/components/shared/navbar";
import { IChildren } from "@/interface";
import { FC } from "react";

const Layout: FC<IChildren> = ({ children }) => {
  return (
    <div className="font-poppins">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
