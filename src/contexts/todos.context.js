import { createContext } from "react";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";
import todoReducer from "../reducers/todo.reducer";
// import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
  { id: 1, task: "Do homework", completed: false },
  { id: 2, task: "Buy milk", completed: true },
];
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  // const todosStuff = useTodoState(defaultTodos)
  const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, todoReducer);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
