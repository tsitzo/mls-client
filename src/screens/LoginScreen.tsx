import React, { FC, useContext, useState } from "react";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";

import { AppStackParams } from "../types/navigation";
import Typography from "../components/text/Typography";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

interface ILoginScreenProps {
  navigation: NativeStackNavigationProp<AppStackParams, "LoginScreen">;
}

const LoginScreen: FC<ILoginScreenProps> = ({ navigation }) => {
  const { colors } = useTheme();
  const { isDarkTheme } = useContext(ThemeContext);
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const buttonDisabled = !email || !password;

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
            placeholder="Password"
            secureTextEntry
            autoComplete="off"
            autoCorrect={false}
            value={password}
            keyboardAppearance={isDarkTheme ? "dark" : "light"}
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
          onPress={() => login({ email, password })}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <Typography size={14} color="subtext">
            Don’t have an account?{" "}
          </Typography>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("RegisterScreen");
            }}
          >
            <Typography size={14} variant="bold" color="primary">
              Sign up
            </Typography>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
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
