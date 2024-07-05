import { useRecoilValue } from "recoil";
import CreateTodo from "./CreateTodo";
import { todoState } from "./atoms";
import Todo from "./Todo";

const TodoList = () => {
  const toDos = useRecoilValue(todoState);

  return (
    <div>
      <CreateTodo />
      <ul>
        {toDos.map((todo) => {
          return <Todo {...todo} key={todo.id} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
