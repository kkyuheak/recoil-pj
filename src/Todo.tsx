import { useSetRecoilState } from "recoil";
import { ITodo, todoState } from "./atoms";

const Todo = ({ text, category }: ITodo) => {
  const setTodo = useSetRecoilState(todoState);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e;

    console.log(name);
  };

  return (
    <li>
      <p>{text}</p>
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          DOING
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          DONE
        </button>
      )}
    </li>
  );
};

export default Todo;
