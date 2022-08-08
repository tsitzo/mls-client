import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParams } from "../types/navigation";
import {
  AdminScreen,
  BookmarksScreen,
  HomeScreen,
  LoginScreen,
  MyProfileScreen,
  PostDetailsScreen,
  RegisterScreen,
  SearchScreen,
  UserProfileScreen,
} from "../screens";
import { AuthContext } from "../context/AuthContext";

const Stack = createNativeStackNavigator<AppStackParams>();

export const AppStack = () => {
  const { Navigator, Screen, Group } = Stack;
  const { token, userId } = useContext(AuthContext);

  const admin = false;

  return (
    <Navigator>
      {!token && !userId ? (
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
          <Screen name="MyProfileScreen" component={MyProfileScreen} />
          <Screen name="UserProfileScreen" component={UserProfileScreen} />
        </Group>
      )}
    </Navigator>
  );
};
