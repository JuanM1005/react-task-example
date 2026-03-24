import { useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskForm() {
  // TaskForm recibe la funcion
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);
  // useContext permite acceder al contexto global (TaskContext)
  // y desestructurar la función createTask directamente

  function handleInput(e) {
    const { name, value } = e.target;

    if (name === "title") {
      setTitle(value);
    } else if (name === "description") {
      setDescription(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Se crea una nueva tarea como objeto
    // const newTask = {
    //   title,
    //   description,
    // };

    // ----------------------------------------

    // Se agrega al arreglo y la manda a App.jsx
    // Recibe el titulo y la descripcion
    createTask({ title, description });

    // Limpiar inputs
    setTitle("");
    setDescription("");
  }

  return (
    <div className="max-w-md mx-auto mb-8">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-10 rounded-lg shadow-xl"
      >
        <h1 className="text-2xl font-bold text-white mb-5 text-center">
          Crea tu tarea
        </h1>
        <input
          type="text"
          name="title"
          placeholder="Título de la tarea"
          onChange={handleInput}
          value={title}
          className="bg-slate-300 p-3 w-full mb-4 rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
          autoFocus
        />
        <textarea
          name="description"
          placeholder="Descripción"
          onChange={handleInput}
          value={description}
          className="bg-slate-300 p-3 w-full mb-4 rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>
        <button className="bg-indigo-500 px-4 py-2 text-white w-full rounded-md hover:bg-indigo-400 transition-colors font-semibold">
          Guardar Tarea
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
