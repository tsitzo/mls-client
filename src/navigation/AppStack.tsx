import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParams } from "../types/navigation";
import {
  AdminScreen,
  BookmarksScreen,
  HomeScreen,
  LoginScreen,
  PostDetailsScreen,
  RegisterScreen,
  SearchScreen,
} from "../screens";
import { AuthContext } from "../context/AuthContext";

const Stack = createNativeStackNavigator<AppStackParams>();

export const AppStack = () => {
  const { Navigator, Screen, Group } = Stack;
  const { token } = useContext(AuthContext);

  const admin = false;

  return (
    <Navigator>
      {!token ? (
        <Group screenOptions={{ headerShown: false }}>
          <Screen name="LoginScreen" component={LoginScreen} />
          <Screen name="RegisterScreen" component={RegisterScreen} />
        </Group>
      ) : (
        <Group>
          <Screen name="HomeScreen" component={HomeScreen} />
          {admin && <Screen name="AdminScreen" component={AdminScreen} />}
          <Screen name="BookmarksScreen" component={BookmarksScreen} />
          <Screen name="PostDetailsScreen" component={PostDetailsScreen} />
          <Screen name="SearchScreen" component={SearchScreen} />
        </Group>
      )}
    </Navigator>
  );
};
