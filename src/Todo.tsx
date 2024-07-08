import { useRecoilValue, useSetRecoilState } from "recoil";
import { ITodo, categories, todoState } from "./atoms";

const Todo = ({ text, category, id }: ITodo) => {
  const setTodo = useSetRecoilState(todoState);
  const toDos = useRecoilValue(todoState);

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

  const handleDelete = () => {
    const todoValue = [...toDos];
    const filterValue = todoValue.filter((item) => item.id !== id);
    console.log(filterValue);
    setTodo(filterValue);
  };

  return (
    <li>
      <p>{text}</p>
      {category !== categories.TO_DO && (
        <button onClick={() => onClick(categories.TO_DO)}>To Do</button>
      )}
      {category !== categories.DOING && (
        <button onClick={() => onClick(categories.DOING)}>DOING</button>
      )}
      {category !== categories.DONE && (
        <button onClick={() => onClick(categories.DONE)}>DONE</button>
      )}
      <button onClick={handleDelete}>DELETE</button>
    </li>
  );
};

export default Todo;
