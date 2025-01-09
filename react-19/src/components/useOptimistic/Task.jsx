import { useState } from "react";

const Task = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = async (formData) => {
    const newTask = await formData.get("task");

    // * Mimick an API call
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setTasks((currentTasks) => [
      ...currentTasks,
      { name: newTask, pending: false },
    ]);
  };

  return (
    <>
      <form action={handleAddTask}>
        <input type="text" name="task" placeholder="Enter task" />
        <button type="submit">Add Task</button>
      </form>

      <h2>Your tasks for Today:</h2>
      <ol>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              {task.name}
              {task.pending && <span>Adding...</span>}
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default Task;
