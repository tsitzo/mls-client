import React, { FC, useContext, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RouteProp, useTheme } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";

import { AppStackParams } from "../types/navigation";
import { AuthContext } from "../context/AuthContext";
import Typography from "../components/text/Typography";

interface IProfileScreenProps {
  navigation: NativeStackNavigationProp<AppStackParams, "ProfileScreen">;
  route: RouteProp<AppStackParams, "ProfileScreen">;
}

const ProfileScreen: FC<IProfileScreenProps> = ({ navigation, route }) => {
  const { logout, user } = useContext(AuthContext);
  const { id } = route.params;

  const isMyProfile = user?._id === id;

  const { colors } = useTheme();

  useEffect(() => {
    if (isMyProfile) {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity onPress={() => logout()}>
            <FontAwesome name="power-off" color={colors.primary} size={22} />
          </TouchableOpacity>
        ),
      });
    }
  }, [navigation]);

  return (
    <View>
      <Typography>{user?._id}</Typography>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
