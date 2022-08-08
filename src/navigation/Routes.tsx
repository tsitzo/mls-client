import React, { useContext } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { AppStack } from "./AppStack";

export const Routes = () => {
  const userLoading = false;
  return (
    <NavigationContainer>
      <StatusBar />
      {userLoading ? <View /> : <AppStack />}
    </NavigationContainer>
  );
};
