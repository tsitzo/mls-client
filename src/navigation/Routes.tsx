import React, { useContext } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { AppStack } from "./AppStack";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

export const Routes = () => {
  const { theme, isDarkTheme } = useContext(ThemeContext);
  const { userLoading } = useContext(AuthContext);

  return (
    <NavigationContainer theme={theme}>
      <StatusBar style={isDarkTheme ? "light" : "dark"} />
      {userLoading ? <View /> : <AppStack />}
    </NavigationContainer>
  );
};
