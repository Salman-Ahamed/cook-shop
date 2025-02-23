import { ReactNode } from "react";

export type IChildren = Readonly<{ children: ReactNode }>;
export type IClassName = { className?: string };
export type IChildrenClassName = IChildren & IClassName;

export interface IRecipe {
  id: string;
  img: string;
  title: string;
  category: string;
  author: string;
  time: string;
  desc: string;
  peopleCount: number;
  peopleImages: string[];
}
