import React, { useState } from "react"; 


const TodoItem = ({ task, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ title: task.title, description: task.description });

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      editTask(task.id, editedTask); 
    }
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask.title}
            onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
          />
          <input
            type="text"
            value={editedTask.description}
            onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
          />
        </>
      ) : (
        <>
          <div className="task-column">{task.title}</div>
          <div className="task-column">{task.description}</div>
        </>
      )}
      <button  className='bg-yellow-600 text-white py-2 px-4 m-5 font-bold rounded' onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
      <button  className='bg-red-600 text-white py-2 px-4 m-5 font-bold rounded' onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
