import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import Typography from "../components/text/Typography";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Spacer from "../components/layout/Spacer";
import { AppStackParams } from "../types/navigation";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

interface IHomeScreenProps {
  navigation: NativeStackNavigationProp<AppStackParams, "HomeScreen">;
}
const HomeScreen: FC<IHomeScreenProps> = ({ navigation }) => {
  const { logout, userId, token } = useContext(AuthContext);
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
            onPress={() => navigation.navigate("MyProfileScreen")}
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

  return <View></View>;
};

export default HomeScreen;

const styles = StyleSheet.create({
  topRowIconContainer: { flexDirection: "row", alignItems: "center" },
});
