import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <>
      {/* <TaskForm createTask={createTask} /> */}
      {/* Le pasamos la función como prop al TaskForm */}
      {/* <TaskList tasks={tasks} deleteTask={deleteTask} /> */}
      {/* TaskList recibe como prop el arreglo para poder renderizarlo */}

      {/* Ya no es necesario pasar props manualmente (createTask, tasks, deleteTask), porque estos componentes están envueltos por TaskContextProvider. Al estar dentro del contexto, pueden acceder directamente a los datos y funciones usando useContext, evitando el prop drilling. */}

      {/* bg-zinc-900 para un fondo oscuro moderno y min-h-screen para ocupar como mínimo todo el alto de la pantalla */}
      <main className="bg-zinc-900 min-h-screen">
        <div className="container mx-auto p-10">
          <TaskForm />
          <TaskList />
        </div>
      </main>
    </>
  );
}

export default App;
