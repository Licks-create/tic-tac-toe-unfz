/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, serInput] = useState();
  const [input2, serInput2] = useState();
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    console.log(e);
    e.preventDefault();
    dispatch(addTodo(input));
  };
  return (
    <form className=" border-2 " onSubmit={addTodoHandler}>
      <input
        type="text"
        value={input}
        name="first_input"
        id="1"
        onChange={(e) => serInput(e.target.value)}
      />
      <input
        type="text"
        value={input2}
        name="second input"
        id="2"
        onChange={(e) => serInput2(e.target.value)}
      />
      <button>add</button>
    </form>
  );
};

export default AddTodo;
