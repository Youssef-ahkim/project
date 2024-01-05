import React from "react";
import { Task } from "./task";

export const ToDoList = (props) => {
    return (
      <ul>
        {props.tasks.map((task, index) => (
          <Task key={index} text={task} />
        ))}
      </ul>
    );
  };
  