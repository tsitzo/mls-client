import React from "react";
import { AuthContextProvider } from "./src/context/AuthContext";
import { ThemeContextProvider } from "./src/context/ThemeContext";
import { Routes } from "./src/navigation/Routes";

const App = () => {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
