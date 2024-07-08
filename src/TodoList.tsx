import { useRecoilState, useRecoilValue } from "recoil";
import CreateTodo from "./CreateTodo";
import { categories, categoryState, todoSelectors } from "./atoms";
import Todo from "./Todo";

const TodoList = () => {
  // const toDos = useRecoilValue(todoState);
  const toDos = useRecoilValue(todoSelectors);
  const [category, setCategory] = useRecoilState(categoryState);
  const handleInput = (e: React.FormEvent<HTMLSelectElement>) => {
    setCategory(+e.currentTarget.value as any);
  };
  console.log(toDos);
  return (
    <div>
      <CreateTodo />
      <h1>To Do</h1>
      {/* <ul>
        {toDo.map((todo) => {
          return <Todo {...todo} key={todo.id} />;
        })}
      </ul>
      <hr />
      <h1>Doing</h1>
      <ul>
        {doing.map((item) => {
          return <Todo {...item} key={item.id} />;
        })}
      </ul>
      <hr />

      <h1>Done</h1>
      <ul>
        {done.map((item) => {
          return <Todo {...item} key={item.id} />;
        })}
      </ul>
      <hr /> */}

      <form>
        <select value={category} onInput={handleInput}>
          <option value={categories.TO_DO} style={{ color: "red" }}>
            To Do
          </option>
          <option value={categories.DOING}>Doing</option>
          <option value={categories.DONE}>Done</option>
        </select>
      </form>
      {toDos.map((item) => (
        <Todo {...item} key={item.id} />
      ))}
    </div>
  );
};

export default TodoList;
