import { ReactNode } from "react";

export type IChildren = Readonly<{ children: ReactNode }>;
export type IClassName = { className?: string };
export type IChildrenClassName = IChildren & IClassName;
