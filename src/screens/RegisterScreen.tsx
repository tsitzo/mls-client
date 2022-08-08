import React, { FC, useContext, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";

import { AppStackParams } from "../types/navigation";
import Typography from "../components/text/Typography";
import { ThemeContext } from "../context/ThemeContext";

import AsyncStorage from "@react-native-async-storage/async-storage";

interface IRegisterScreenProps {
  navigation: NativeStackNavigationProp<AppStackParams, "RegisterScreen">;
}

const RegisterScreen: FC<IRegisterScreenProps> = ({ navigation }) => {
  const { colors } = useTheme();
  const { isDarkTheme } = useContext(ThemeContext);

  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const buttonDisabled = !email || !password || !username;

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardAvoidView} behavior="padding">
        <Image style={styles.logo} source={require("../../assets/logo.png")} />

        <View style={styles.inputContainer}>
          <TextInput
            placeholderTextColor={colors.subtext}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            value={email}
            keyboardAppearance={isDarkTheme ? "dark" : "light"}
            onChangeText={(e) => setEmail(e)}
            style={[
              styles.textInput,
              {
                backgroundColor: colors.card,
                color: colors.text,
              },
            ]}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholderTextColor={colors.subtext}
            placeholder="Username"
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            value={username}
            keyboardAppearance={isDarkTheme ? "dark" : "light"}
            onChangeText={(e) => setUsername(e)}
            style={[
              styles.textInput,
              {
                backgroundColor: colors.card,
                color: colors.text,
              },
            ]}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholderTextColor={colors.subtext}
            placeholder="Password"
            autoComplete="off"
            autoCorrect={false}
            keyboardAppearance={isDarkTheme ? "dark" : "light"}
            secureTextEntry
            value={password}
            onChangeText={(e) => setPassword(e)}
            style={[
              styles.textInput,
              {
                backgroundColor: colors.card,
                color: colors.text,
              },
            ]}
          />
        </View>

        <TouchableOpacity
          disabled={buttonDisabled}
          style={[
            styles.enterButton,
            {
              backgroundColor: buttonDisabled
                ? colors.disabled
                : colors.primary,
              opacity: buttonDisabled ? 0.4 : 1,
            },
          ]}
        >
          <Text style={styles.loginText}>REGISTER</Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <Typography size={14} color="subtext">
            Already have an account?{" "}
          </Typography>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Typography size={14} variant="bold" color="primary">
              Login
            </Typography>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  backbutton: {
    position: "absolute",
    top: 70,
    left: 10,
  },
  keyboardAvoidView: {
    flex: 1,
    padding: 20,
    width: "100%",
    maxWidth: Dimensions.get("window").width * 0.9,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 200,
    width: 200,
    marginBottom: 24,
  },
  inputContainer: {
    width: "100%",
    marginVertical: 12,
  },
  textInput: {
    padding: 15,
    borderRadius: 10,
  },
  enterButton: {
    padding: 15,
    width: "100%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
  },
  loginText: { color: "#fff", fontWeight: "700" },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
});
