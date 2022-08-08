import React from "react";
import { ThemeContextProvider } from "./src/context/ThemeContext";
import { Routes } from "./src/navigation/Routes";

const App = () => {
  return (
    <ThemeContextProvider>
      <Routes />
    </ThemeContextProvider>
  );
};

export default App;
