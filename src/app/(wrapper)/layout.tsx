import { Footer, Navbar } from "@/components/shared";
import { IChildren } from "@/interface";
import { FC } from "react";

const Layout: FC<IChildren> = ({ children }) => {
  return (
    <div className="font-poppins">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
