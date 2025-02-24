import { Footer, Navbar } from "@/components/shared";
import { IChildren } from "@/interface";
import { FC } from "react";

const Layout: FC<IChildren> = ({ children }) => {
  return (
    <div className="font-poppins min-h-screen flex flex-col">
      <Navbar />
      {children}
      <Footer className="hidden sm:block" />
    </div>
  );
};

export default Layout;
