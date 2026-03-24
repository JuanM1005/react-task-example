import { createContext } from "react";
import { tasks as initialTasks } from "../data/task";
import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const TaskContext = createContext(); // El contexto se llama TaskContext y almacena los datos

export function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState(initialTasks); // Se inicia el estado con los datos iniciales, asi evitamos usar useEffect() y localStorage los vuelva a sobreescribir

  // Se crea el arreglo con los valores que tiene nuestro arreglo de objetos tasks

  function createTask(task) {
    // Se crea un nuevo arreglo y se concatena la nueva tarea que nos manda TaskForm
    // [1, 2, 3, newTask (4), newTask(5)]

    // ----------------------------------------

    // Recibe el titulo y la descripcion y se crea el objeto aqui
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: prevTasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskID) {
    // Para cada elemento comparamos si es diferente del ID dado, usamos filter para que el arreglo original no mute y nos vuelva uno nuevo, asi evitando errores
    // console.log(tasks.filter((task) => task.id != taskID));
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskID));
  }

  // Este es el componente que englobara a todos
  return (
    // Le pasamos lo que necesitaremos para los demás componentes, asi evitando prop drilling
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {/* Renderiza <App /> */}
      {children}
    </TaskContext.Provider>
  );
}
