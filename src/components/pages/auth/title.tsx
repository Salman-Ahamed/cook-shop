import { IChildren } from "@/interface";
import React, { FC } from "react";

export const Title: FC<IChildren> = ({ children }) => (
  <h3 className="text-[#FFA95A] text-[25px] font-semibold">{children}</h3>
);
