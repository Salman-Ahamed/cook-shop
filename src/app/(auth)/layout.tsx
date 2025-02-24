import { Logo } from "@/components/shared";
import { IChildren } from "@/interface";
import Image from "next/image";
import { FC } from "react";

const AuthLayout: FC<IChildren> = ({ children }) => (
  <main className="flex flex-col md:flex-row">
    <div className="w-full hidden md:block">
      <Image
        alt=""
        src="/auth-bg.png"
        width={756}
        height={768}
        className="w-full h-screen"
      />
    </div>

    <div className="flex flex-col h-screen w-full">
      <div className="md:hidden w-full flex justify-center items-center py-[30px]">
        <Logo />
      </div>
      <div className="flex items-start md:items-center justify-center w-full flex-1">
        {children}
      </div>
    </div>
  </main>
);

export default AuthLayout;
