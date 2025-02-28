"use client";

import Link from "next/link";
import { Input } from "./input";
import { Title } from "./title";

export const SignupForm = () => {
  return (
    <form className="w-full max-w-[292px] mx-auto font-poppins leading-[22px]">
      <Title children="Sign up!" />
      <div className="flex flex-col gap-1.5 pt-7">
        <Input label="Nome" type="text" placeholder="Name" />
        <Input label="Email" type="email" placeholder="Type your email!" />
        <Input label="Password" placeholder="***" type="password" />
        <Input label="Confirm password" placeholder="***" type="password" />

        <button
          type="submit"
          className="w-full py-[7px] px-[50px] bg-[#2D3748] rounded-[5px] text-white text-xs focus:outline-none mt-[18px]"
        >
          Confirm registration
        </button>

        <div className="text-xs space-y-[15px]">
          <p className="text-center">
            I already have an account!&nbsp;
            <Link href="/login" className="text-[#9C4B00]">
              Login
            </Link>
          </p>
          <p className="text-[11.5px]">
            COOKSHOW processes the data collected to create your user area. To
            learn more about how to manage your personal data and exercise your
            rights, see our&nbsp;
            <span className="text-[#9C4B00]">
              Personal Data Protection Policy.
            </span>
          </p>
        </div>
      </div>
    </form>
  );
};
