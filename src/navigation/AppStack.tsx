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
  ProfileScreen,
} from "../screens";
import { AuthContext } from "../context/AuthContext";

const Stack = createNativeStackNavigator<AppStackParams>();

export const AppStack = () => {
  const { Navigator, Screen, Group } = Stack;
  const { token, user } = useContext(AuthContext);

  const admin = false;

  return (
    <Navigator>
      {!token && !user ? (
        <Group screenOptions={{ headerShown: false }}>
          <Screen name="LoginScreen" component={LoginScreen} />
          <Screen name="RegisterScreen" component={RegisterScreen} />
        </Group>
      ) : (
        <Group>
          <Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: "" }}
          />
          {admin && <Screen name="AdminScreen" component={AdminScreen} />}
          <Screen
            name="BookmarksScreen"
            component={BookmarksScreen}
            options={{ headerTitle: "Bookmarks" }}
          />
          <Screen name="PostDetailsScreen" component={PostDetailsScreen} />
          <Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{ headerTitle: "Search" }}
          />

          <Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={({ route }) => ({
              headerTitle: route.params.username,
            })}
          />
        </Group>
      )}
    </Navigator>
  );
};
