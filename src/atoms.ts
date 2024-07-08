import { atom, selector } from "recoil";

type categories = "TO_DO" | "DOING" | "DONE";

export interface ITodo {
  text: string;
  id: number;
  category: categories;
}

export const todoState = atom<ITodo[]>({
  key: "todos",
  default: [],
});

export const categoryState = atom<categories>({
  key: "category",
  default: "TO_DO",
});

export const todoSelectors = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(todoState);
    const category = get(categoryState);
    return todos.filter((item) => item.category === category);
  },
});
