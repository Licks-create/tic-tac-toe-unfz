/* eslint-disable no-unused-vars */
import React from "react";
import AddTodo from "./AddTodo";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.TODO.todos);
  const dispatch = useDispatch();
console.log({todos})
  return (
    <div>
      {/* <AddTodo /> */}
      {todos?.map((todo) => (
        <div key={todo.id}>
          <li>{todo.text}</li>
          <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
