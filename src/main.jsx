import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import "./styles/navbar.css";
import "./styles/mood.css";
import "./styles/quote.css";

import "./styles/favorites.css";
import "./styles/about.css";
import "./styles/home.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
