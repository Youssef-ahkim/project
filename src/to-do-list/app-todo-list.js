import React from "react";
import { ToDoList } from "./components/todo-list";
import { tasks } from "./components/data";

const App = () => {
    
  
    return (
      <div>
        <h1>ToDo List</h1>
        <ToDoList tasks={tasks} />
      </div>
    );
  };
  
  export default App;