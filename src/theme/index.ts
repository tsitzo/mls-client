import {
  DarkTheme,
  DefaultTheme,
  ExtendedTheme,
} from "@react-navigation/native";

export const CustomDarkTheme: ExtendedTheme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: "#6D3D9A",
    secondary: "rgb(0, 174, 239)",
    tertiary: "rgb(34, 31, 114)",
    danger: "#BF1A2F",
    background: "#0A0A0A",
    card: "#1F1F1F",
    surface: "#292929",
    text: "#FAFAFA",
    subtext: "#989899",
    separator: "#3d3d3d",
    highlight: "#018E42",
    disabled: "#6D3D9A",
  },
};

export const CustomLightTheme: ExtendedTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: "#6D3D9A",
    secondary: "rgb(0, 174, 239)",
    tertiary: "rgb(34, 31, 114)",
    danger: "rgb(208, 2, 27)",
    background: "#F2F2F6",
    card: "#FFFFFF",
    surface: "#EBEBEB",
    text: "rgb(0, 0, 0)",
    subtext: "rgb(102, 102, 102)",
    separator: "rgb(194, 194, 195)",
    highlight: "rgb(199, 198, 203)",
    disabled: "#6D3D9A",
  },
};
