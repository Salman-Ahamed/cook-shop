"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC, InputHTMLAttributes, useState } from "react";

type TInput = InputHTMLAttributes<HTMLInputElement> & { label: string };

export const Input: FC<TInput> = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="w-full space-y-2.5">
      <label className="block font-medium text-[#9C4B00] text-[12px]">
        {props.label}
      </label>

      <div className="w-full flex items-center justify-between bg-[#F1F1F1] rounded-[10px]">
        <input
          {...props}
          type={
            props.type === "password"
              ? visible
                ? "text"
                : "password"
              : props.type
          }
          className={cn(
            "focus:outline-none px-2.5 py-1 text-[10px] w-full bg-transparent",
            props.className
          )}
        />
        {props.type === "password" && (
          <button
            type="button"
            className="focus:outline-none mr-2.5"
            onClick={() => setVisible(!visible)}
          >
            <Image
              alt="eye"
              src={visible ? "/eye-open.svg" : "/eye-close.svg"}
              width={14}
              height={12}
              className=""
            />
          </button>
        )}
      </div>
    </div>
  );
};
