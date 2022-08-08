import React, { useContext } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { AppStack } from "./AppStack";
import { ThemeContext } from "../context/ThemeContext";

export const Routes = () => {
  const { theme, isDarkTheme } = useContext(ThemeContext);
  const userLoading = false;

  return (
    <NavigationContainer theme={theme}>
      <StatusBar style={isDarkTheme ? "light" : "dark"} />
      {userLoading ? <View /> : <AppStack />}
    </NavigationContainer>
  );
};
