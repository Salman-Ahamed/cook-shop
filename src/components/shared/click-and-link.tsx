import Link from "next/link";
import { ButtonHTMLAttributes, FC } from "react";

type TProps = ButtonHTMLAttributes<HTMLButtonElement> & { link: string };
export const ClickAndLink: FC<TProps> = ({ link, ...props }) => (
  <>
    <div className="hidden sm:block">
      <button {...props} />
    </div>
    <div className="block sm:hidden">
      <Link href={link} className={props.className}>
        {props.children}
      </Link>
    </div>
  </>
);
