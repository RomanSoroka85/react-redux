import React from "react";
import Filter from "./Filter";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
const todo = () => {
  return (
    <div>
      <h2>Todo</h2>
      <TodoForm />
      <Filter/>
      <TodoList/>
    </div>
  );
};

export default todo;
