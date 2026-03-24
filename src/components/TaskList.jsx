import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  // TaskList recibe la lista
  if (tasks.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center mt-10">
        No hay tareas aún...
      </h1>
    );
  }

  return (
    // Renderiza la lista
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
