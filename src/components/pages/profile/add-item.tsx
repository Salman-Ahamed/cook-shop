"use client";

import { Modal } from "@/components/shared";
import { Button } from "@/components/shared/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Form } from "./form";

export const AddItem = () => {
  const [open, setOpen] = useState(false);
  const btnClass =
    "fixed xl:absolute right-6 bottom-[45px] sm:bottom-0 sm:top-[50%] bg-gradient-to-t from-[#FF7A00] to-[#9C4B00] size-[45px] rounded-[10px] flex justify-center items-center";

  return (
    <>
      <div className="hidden sm:block">
        <button onClick={() => setOpen(true)} className={btnClass}>
          <Image alt="add" src="/plus.svg" width={15} height={15} />
        </button>
      </div>
      <div className="block sm:hidden">
        <Link href="/recipe-add" className={btnClass}>
          <Image alt="add" src="/plus.svg" width={15} height={15} />
        </Link>
      </div>
      <div className="hidden sm:block ">
        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <div className="grid grid-cols-12 gap-[50px] font-poppins">
            <div className="flex justify-center items-center flex-col gap-[124px] col-span-5">
              <figure className="size-[250px]  lg:size-[350px] flex justify-center items-center border border-primary rounded-full">
                <Image
                  alt="add"
                  src="/recipe-img.png"
                  width={90}
                  height={90}
                  className=""
                />
              </figure>

              <Button isSecondary className="py-[9px] px-14">
                Select
              </Button>
            </div>
            <div className="col-span-7">
              <Form />
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};
