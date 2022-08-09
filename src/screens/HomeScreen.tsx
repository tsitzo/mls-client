import React, { FC, useContext, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

import Spacer from "../components/layout/Spacer";
import { AppStackParams } from "../types/navigation";
import { useTheme } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
import Typography from "../components/text/Typography";

interface IHomeScreenProps {
  navigation: NativeStackNavigationProp<AppStackParams, "HomeScreen">;
}
const HomeScreen: FC<IHomeScreenProps> = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  const { colors } = useTheme();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.topRowIconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
            <FontAwesome5 name="search" color={colors.primary} size={22} />
          </TouchableOpacity>

          <Spacer x={10} />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProfileScreen", {
                id: user?._id!,
                username: "My Profile",
              })
            }
          >
            <Ionicons name="person" color={colors.primary} size={22} />
          </TouchableOpacity>

          <Spacer x={10} />
          <TouchableOpacity
            onPress={() => navigation.navigate("BookmarksScreen")}
          >
            <Ionicons name="bookmark" color={colors.primary} size={24} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Typography>{user?._id!}</Typography>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  topRowIconContainer: { flexDirection: "row", alignItems: "center" },
});
