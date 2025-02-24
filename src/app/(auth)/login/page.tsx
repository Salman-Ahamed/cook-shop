import { LoginForm } from "@/components/pages/auth";
import { Logo } from "@/components/shared";
import Image from "next/image";

const LoginPage = () => {
  return (
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

      <div className="md:hidden w-full flex justify-center items-center py-[30px]">
        <Logo />
      </div>
      <div className="flex items-start md:items-center justify-center w-full h-screen">
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
