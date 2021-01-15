import React from "react";

import { connect } from "react-redux";
const TodoList = ({ task }) => {
  return (
    <ul>
      {task.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

const mstp = (state) => {
  return { tasks: state.tasks.filter((item)=>item.text.includes(state.filter.toLowerCase) )};
};

export default connect(mstp)(TodoList);
