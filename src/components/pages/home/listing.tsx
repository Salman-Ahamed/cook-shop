import { FC } from "react";

type TProps = { items: string[] };
export const Listing: FC<TProps> = ({ items }) => {
  return <div>Listing: {items.join(", ")}</div>;
};
