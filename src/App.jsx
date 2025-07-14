import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import Router from "./Router.jsx";

import "./styles.css";

const App = () => {

  return (
    <StrictMode>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<App />);
