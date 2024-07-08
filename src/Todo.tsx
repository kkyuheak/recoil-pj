import { useSetRecoilState } from "recoil";
import { ITodo, todoState } from "./atoms";

const Todo = ({ text, category, id }: ITodo) => {
  const setTodo = useSetRecoilState(todoState);

  const onClick = (newCategory: ITodo["category"]) => {
    setTodo((oldValue) => {
      const targetIndex = oldValue.findIndex((v) => v.id === id);
      console.log(targetIndex);
      const newTodo = { text, id, category: newCategory };
      return [
        ...oldValue.slice(0, targetIndex),
        newTodo,
        ...oldValue.slice(targetIndex + 1),
      ];
    });

    console.log(category, id);
  };

  return (
    <li>
      <p>{text}</p>
      {category !== "TO_DO" && (
        <button onClick={() => onClick("TO_DO")}>To Do</button>
      )}
      {category !== "DOING" && (
        <button onClick={() => onClick("DOING")}>DOING</button>
      )}
      {category !== "DONE" && (
        <button onClick={() => onClick("DONE")}>DONE</button>
      )}
    </li>
  );
};

export default Todo;
