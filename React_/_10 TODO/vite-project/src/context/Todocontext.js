import { createContext, useContext } from "react";
export const TodoContext = createContext({
  todos: [{ id: 1, todo: "message", completed: false }],
  addtodo: (todo) => {},
  updatetodo: (id, todo) => {},
  deletetodo: (id) => {},
  toggleComplete: (id) => {},
});

export const Todoprovider = TodoContext.Provider;

export const usetodo = () => {
  return useContext(TodoContext);
};
