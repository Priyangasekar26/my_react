import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Finish homework' },
    { id: 2, text: 'plant trees' },
    { id: 3, text: 'Read a book' },
    { id: 4, text: 'Build a app' },
  ]);

  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    const newItem = {
      id: Date.now(),
      text: newTask
    };
    setTasks([...tasks, newItem]);
    setNewTask('');
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h2>My Todo List</h2>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text} <button onClick={() => removeTask(task.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

