import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    green: {
      700: "#00875F",
      500: "#00B37E",
    },
    purple: {
      700: "#6201d1",
    },
    yellow: {
      700: "#f5c944",
    },
    gray: {
      700: "#121214",
      600: "#202024",
      500: "#29292E",
      400: "#323238",
      300: "#7C7C8A",
      200: "#fafafa",
      100: "#E1E1E6",
    },
    white: "#FFFFFF",
    red: {
      500: "#F75A68",
    },
  },
  fonts: {
    heading: "Roboto_700Bold",
    body: "Roboto_400Regular",
    krona: "KronaOne_400Regular",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  sizes: {
    14: 56,
    27: 118,
    33: 148,
  },
});
