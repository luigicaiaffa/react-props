// import react
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import css
import "./css/index.css";

// import components
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
