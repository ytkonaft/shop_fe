import { modularScale } from "polished";

const Theme = {
  colors: {
    main: "#ae00ff",
    mainHover: "#650194",
    white: "#FFFFFF",
    dark: "#333",
    gray:  "#eee",
    success: "#4DD47A",
    error: "#F24040"
  },
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
