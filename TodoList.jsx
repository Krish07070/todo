import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, deleteTask, editTask }) => {
  return (
    <div  className="task-list bg-slate-200 text-xl">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} deleteTask={deleteTask} editTask={editTask} />
      ))}
    </div>
  );
};

export default TodoList;
