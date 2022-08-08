import { Button, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Typography from "../components/text/Typography";

const HomeScreen = () => {
  const { logout, userId, token } = useContext(AuthContext);
  return (
    <View>
      <Typography>{token}</Typography>
      <Typography>{userId}</Typography>
      <Button title="LOGOUT" onPress={() => logout()} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
