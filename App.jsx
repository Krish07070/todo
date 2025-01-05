import React, { useState } from "react";
import TodoList from "./components/TodoList"; 
import "./App.css";  
import './index.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  const addTask = () => {
    if (!newTask.title || !newTask.description) return;
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
    setNewTask({ title: "", description: "" });
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task)));
  };

  return (
    <div className="container">
      <h1 className="bg-zinc-800 text-white text-2xl ">To-Do List</h1>
      <div className="input-container bg-slate-200 text-xl">
        <input
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Task Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
        <button className="bg-black text-white py-2 px-4 m-5 font-bold rounded" onClick={addTask}>Add Task</button>
      </div>

      <TodoList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
};

export default App;
