import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TaskContextProvider } from "./context/TaskContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>

    {/* Es lo mismo que lo de arriba pero de una forma más explicita */}
    {/* <TaskContextProvider children={<App />} /> */}
  </StrictMode>,
);
