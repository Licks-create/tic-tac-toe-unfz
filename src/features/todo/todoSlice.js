/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "hello",
    },
  ],
};

function sayHello(state, action) {
  console.log("hello");
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    sayHello,
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((data) => data.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer
