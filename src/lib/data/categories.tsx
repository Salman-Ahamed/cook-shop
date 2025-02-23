import { recipes } from "./items";

export const categories = recipes.reduce((acc, item) => {
  if (acc.includes(item.category)) return acc;

  return [...acc, item.category];
}, [] as string[]);
