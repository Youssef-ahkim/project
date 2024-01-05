import React, { useState } from 'react';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  }

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks(prevTasks => [...prevTasks, task]);
      setTask('');
    }
  }

  const handleDeleteTask = (index) => {
    setTasks(prevTasks => {
      const newTasks = [...prevTasks];
      newTasks.splice(index, 1);
      return newTasks;
    });
  }

  return (
    <div className="app">
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={handleTaskChange}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
