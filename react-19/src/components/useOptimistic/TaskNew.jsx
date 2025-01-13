import { useState, useOptimistic } from "react";

const TaskNew = () => {
  const [tasks, setTasks] = useState([]);

  //SYNTAX: const [optimisticState, setOptimisticState] = useOptimistic(
  // state, updateFn )
  const [optimisticTasks, setOptimisticTask] = useOptimistic(
    tasks,
    (currentTasks, newTask) => [
      ...currentTasks,
      { name: newTask, pending: true },
    ]
  );

  const handleAddTask = async (formData) => {
    const newTask = await formData.get("task");

    setOptimisticTask(newTask);

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
        {optimisticTasks.map((task, index) => {
          return (
            <li key={index}>
              {task.name}
              {task.pending && <span> ⏳ Adding...</span>}
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default TaskNew;
