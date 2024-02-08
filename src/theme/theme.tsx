import { Dimensions } from "react-native";

export const screenHeight = Dimensions.get("window").height;
export const screenWidth = Dimensions.get("window").width;

const palette = {
  primary: "#4745F5",
  background: "#010007",
  muted50: "#FAFAFA",
  white: "#FFF",
  black: "#000",
  muted600: "#D4D4D4",
  muted900: "#656468",
  background2: "#10101F",
  error500: "#EF4444",
};

export const theme = {
  colors: {
    primary: palette.primary,
    white: palette.white,
    background: palette.background,
    background2: palette.background2,
    modalBackground: palette.muted50,
    primaryText: palette.muted50,
    secondaryText: palette.muted900,
    tertiaryText: palette.muted600,
    primaryButtonBackground: palette.primary,
    primaryButtonText: palette.muted50,
    errorText: palette.error500,
    black: palette.black,
  },
  spacing: {
    xxs: 8,
    xs: 12,
    s: 16,
    m: 24,
    l: 40,
    xl: 48,
  },
  fontSize: {
    display2xl: 72,
    displayxl: 60,
    displaylg: 48,
    displaymd: 36,
    displaysm: 30,
    displayxs: 24,
    textxl: 20,
    textlg: 18,
    textmd: 16,
    textsm: 14,
    textxs: 12,
  },
  borderRadius: {
    primary: 4,
    button: 4,
    bottomSheet: 20,
    modal: 20,
    l: 36,
    m: 16,
    s: 8,
  },
  linearGradient: {
    primary: ["#4745F5", "#4745F5"],
  },
};
