import { modularScale } from "polished";

const Theme = {
  colors: {
    main: "#ae00ff",
    white: "#FFFFFF",
    dark: "#333",
    gray:  "#ddd",
    success: "#4DD47A",
    error: "#F24040",
    background: "#edf2f7",
    hover: {
      main: "#650194",
      white: "#FFFFFF",
      dark: "#888",
      gray:  "#ccc",
      success: "#4DD47A",
      error: "#b53232"
    },
  },
  boxShadow: "0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04)",
  typo: {
    fonts: {
      default: "Roboto, sans-serif",
      secondary: "Arial, sans-serif"
    },
    weights: {
      light: 300,
      regular: 400,
      bold: 700,
      black: 900
    }
  },
  zIndex: {
    bottom: 1000,
    middleBottom: 1100,
    middle: 1300,
    middleTop: 1400,
    top: 1500
  },
  ms: step => modularScale(step, "1rem", "majorSecond"),
  breakpoints: {
    sm: 550,
    md: 992,
    lg: 1400
  }
};

export default Theme;
