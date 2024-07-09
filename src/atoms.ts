import { atom, selector } from "recoil";

export enum categories {
  "TO_DO",
  "DOING",
  "DONE",
}

export interface ITodo {
  text: string;
  id: number;
  category: categories;
}

const getDefaultItem = localStorage.getItem("todos");
const defaultItem: ITodo[] = JSON.parse(getDefaultItem!);

export const todoState = atom<ITodo[]>({
  key: "todos",
  default: defaultItem || [],
});

export const categoryState = atom<categories>({
  key: "category",
  default: categories.TO_DO,
});

export const todoSelectors = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(todoState);
    const category = get(categoryState);
    return todos.filter((item) => item.category === category);
  },
});

export const timeState = atom({
  key: "timeState",
  default: 0,
});

export const hourSelector = selector<number>({
  key: "hours",
  get: ({ get }) => {
    const time = get(timeState);
    return time / 60;
  },
  set: ({ set }, newValue) => {
    const minutes = +newValue * 60;
    console.log(newValue);
    set(timeState, minutes);
  },
});
