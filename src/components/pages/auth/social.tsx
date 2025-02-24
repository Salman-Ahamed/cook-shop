import Image from "next/image";
import { ButtonHTMLAttributes, FC } from "react";

type TButton = ButtonHTMLAttributes<HTMLButtonElement> & { icon: string };
const Button: FC<TButton> = (props) => (
  <button className="w-full py-1 text-center text-xs flex items-center justify-center gap-1 border-[1px] border-black rounded-[5px] focus:outline-none">
    <Image alt="google" src={props.icon} width={18} height={18} />
    {props.children}
  </button>
);

export const SocialAuth = () => {
  return (
    <div className="pt-2.5 space-y-2">
      <Button icon="/google.png">Continue with Google</Button>
      <Button icon="/facebook.png">Continue with Facebook</Button>
    </div>
  );
};
