import { IChildrenClassName } from "@/interface";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

type TProps = { isOpen: boolean; onClose: () => void } & IChildrenClassName;

export const Modal: FC<TProps> = (props) => {
  const { children, isOpen, onClose, className } = props || {};
  if (!isOpen) return null;

  return (
    <section className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black/30 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="flex items-center justify-center min-h-screen px-5">
        <div
          className={cn(
            "relative w-full bg-white shadow-xl max-w-4xl pt-20 pb-10 px-10 pr-12",
            className
          )}
        >
          <button
            className="absolute top-3 right-3.5 text-gray-400 text-2xl hover:text-gray-500"
            onClick={onClose}
          >
            <Image alt="close" src="/x.svg" width={40} height={40} />
          </button>
          {children}
        </div>
      </div>
    </section>
  );
};
