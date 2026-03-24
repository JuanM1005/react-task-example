import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md border border-gray-700 flex flex-col justify-between hover:scale-105 transition-transform">
      <div>
        <h3 className="text-xl font-bold capitalize mb-2">{task.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {task.description}
        </p>
      </div>
      <button
        className="bg-red-500 px-3 py-1.5 rounded-md mt-6 hover:bg-red-400 transition-colors font-medium text-sm w-fit cursor-pointer"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
