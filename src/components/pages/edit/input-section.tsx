import { FC } from "react";

type TProps = { label: string; value?: string };
export const InputSection: FC<TProps> = ({ label, value }) => (
  <div className="font-poppins flex border-b border-[#DBDBDB] py-6 gap-5 ps-5 md:ps-10 xl:ps-[70px]">
    <h1 className="text-lg text-primary">{label}</h1>
    {value && (
      <input
        type="text"
        defaultValue={value}
        className="bg-transparent focus:outline-none text-lg"
      />
    )}
  </div>
);
