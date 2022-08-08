import React, { FC, useState, createContext, useEffect } from "react";
import { CustomDarkTheme, CustomLightTheme } from "../theme";

export type ThemeContextState = {
  isDarkTheme: boolean;
  theme: any;
  switchTheme: () => void;
};

const contextDefaultValue: ThemeContextState = {
  isDarkTheme: true,
  theme: CustomDarkTheme,
  switchTheme: () => {},
};

export const ThemeContext =
  createContext<ThemeContextState>(contextDefaultValue);

export const ThemeContextProvider: FC = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(
    contextDefaultValue.isDarkTheme
  );

  const theme = isDarkTheme ? CustomDarkTheme : CustomLightTheme;

  const switchTheme = () => {
    setIsDarkTheme((isDarkTheme) => !isDarkTheme);
  };
  return (
    <ThemeContext.Provider value={{ isDarkTheme, theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
