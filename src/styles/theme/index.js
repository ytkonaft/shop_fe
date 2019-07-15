import { modularScale } from "polished";

const Theme = {
  colors: {
    porcelain: "#F3F7F7",
    white: "#FFFFFF",
    black: "#000000",
    status: {
      success: "#4DD47A",
      error: "#F24040"
    }
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
  ms: (step) => modularScale(step, "1rem", "majorSecond"),
  breakpoints: {
    sm: 550,
    md: 992,
    lg: 1400
  }
};

export default Theme;
