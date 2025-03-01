import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, FC } from "react";

type TProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isSecondary?: boolean;
};
export const Button: FC<TProps> = (props) => {
  const { className, children, isSecondary, ...others } = props;
  return (
    <button
      className={cn(
        "py-3.5 px-6 rounded-[5px] text-lg text-white",
        isSecondary ? "bg-[#2D3748]" : "bg-[#4E0303]",
        className
      )}
      {...others}
    >
      {children}
    </button>
  );
};
