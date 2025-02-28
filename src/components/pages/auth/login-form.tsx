"use client";

import { TButton } from "@/interface";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC, useState } from "react";
import { Input } from "./input";
import { SocialAuth } from "./social";
import { Title } from "./title";

const Button: FC<TButton> = ({ children, className, ...oth }) => (
  <button
    {...oth}
    className={cn(
      "w-fit py-1 px-[50px] bg-[#FF902B] rounded-[5px] text-white text-xs focus:outline-none",
      className
    )}
  >
    {children}
  </button>
);

export const LoginForm = () => {
  const [agree, setAgree] = useState(false);

  return (
    <form className="w-full max-w-[292px] mx-auto font-poppins leading-[22px]">
      <Title children="Welcome!" />
      <div className="flex flex-col gap-1.5 pt-7">
        <Input label="Email" type="email" placeholder="Type your email!" />
        <Input label="Password" placeholder="***" type="password" />

        <div className="flex justify-between items-center pt-6">
          <Button type="submit">Login</Button>
          <Link href="/signup">
            <Button type="button" className="bg-[#2D3748]">
              Sign up
            </Button>
          </Link>
        </div>

        <div className="flex justify-between items-center gap-2.5 pt-1.5">
          <div className="flex items-center justify-between gap-1 w-fit">
            <button
              type="button"
              className={cn(
                "size-5 border-[1.5px] border-[#FF7A00] rounded-[5px] focus:outline-none",
                agree && "border-none"
              )}
              onClick={() => setAgree(!agree)}
            >
              {agree && "✅"}
            </button>
            <span className="text-[12px] font-medium text-[#AB8A6C]">
              Remember me
            </span>
          </div>

          <p className="text-[12px] font-medium text-[#AB8A6C]">
            Forgot password?
          </p>
        </div>

        <p className="text-xs w-full text-center py-1">Or</p>

        <SocialAuth />
      </div>
    </form>
  );
};
