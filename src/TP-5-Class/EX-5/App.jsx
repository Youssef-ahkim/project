import React, { Component } from 'react';
import "./App.css"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      Tasks: []
    };
  }

  handleTaskChange = (e) => {
    this.setState({ task: e.target.value });
  }

  handleAddTask = () => {
    if (this.state.task.trim() !== '') {
      this.setState(prevState => ({
        Tasks: [...prevState.Tasks, this.state.task],
        task: ''
      }));
    }
  }

  handleDeleteTask = (index) => {
    this.setState(prevState => {
      const newTasks = [...prevState.Tasks];
      newTasks.splice(index, 1);
      return { Tasks: newTasks };
    });
  }


  render() {
    return (
      <div className="app">
        <div className="input-container">
          <input
            type="text"
            value={this.state.task}
            onChange={this.handleTaskChange}
            placeholder="Enter a task"
          />
          <button onClick={this.handleAddTask}>Add Task</button>
        </div>
        <ul className="task-list">
          {this.state.Tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => this.handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
