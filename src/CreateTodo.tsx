import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, todoState } from "./atoms";
import { useEffect } from "react";

interface FormValues {
  todos: string;
}

const CreateTodo = () => {
  const setTodos = useSetRecoilState(todoState);
  const category = useRecoilValue(categoryState);
  const toDos = useRecoilValue(todoState);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>();

  const onSubmit = ({ todos }: FormValues) => {
    setTodos((oldValues) => [
      { text: todos, id: Date.now(), category },
      ...oldValues,
    ]);

    setValue("todos", "");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDos));
  }, [toDos]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("todos", { required: "할 일을 적어주세요" })}
        type="text"
        placeholder="할 일 적기"
      />
      <button>입력</button>
      <p>{errors.todos?.message}</p>
    </form>
  );
};

export default CreateTodo;
