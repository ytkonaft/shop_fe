import styled from "styled-components";

const sizes = {
  superLg: "super-lg",
  extraLg: "extra-lg",
  lg: "lg",
  sm: "sm",
  md: "md"
};

const types = {
  arrowRight: "arrow-right",
  arrowLeft: "arrow-left",
  arrowUp: "arrow-up",
  arrowDown: "arrow-down"
};

const iconSizeCalc = (size, theme) => {
  switch (size) {
    case sizes.sm:
      return theme.ms(-5);
    case sizes.md:
      return theme.ms(-2);
    case sizes.lg:
      return theme.ms(-1);
    case sizes.extraLg:
      return theme.ms(1);
    case sizes.SuperLg:
      return theme.ms(3);
    default:
      return theme.ms(-5);
  }
};

const I = styled.i`
  display: inline-block;
`;
const Svg = styled.svg`
  display: block;
  ${({ theme, size = sizes.sm }) => {
    const sizeCalculated = iconSizeCalc(size, theme);
    return `
        flex-shrink: 0;
        width: ${sizeCalculated};
        height: ${sizeCalculated};
    `;
  }};
  path {
    transition: all 0.3s ease;
  }
`;

const getArrowIconPath = type => {
  switch (type) {
    case types.arrowUp:
      return "M4.036 2.914L1.207 5.743.5 5.036l2.828-2.829.708-.707L7.57 5.036l-.707.707-2.828-2.829z";
    case types.arrowDown:
      return "M4.036 5.657l2.828-2.829.707.708-2.828 2.828-.707.707L.5 3.536l.707-.708 2.829 2.829z";
    case types.arrowLeft:
      return "M3.3 4L6 1.2 5.4.5 2.6 3.3l-.7.7 3.5 3.5.7-.7z";
    case types.arrowRight:
      return "M5.157 4.036L2.328 6.864l.708.707 2.828-2.828.707-.707L3.036.5l-.708.707 2.829 2.829z";
  }
};

const Icon = ({ fill = "#333", className, type, size = sizes.sm }) => {
  switch (type) {
    case types.arrowDown:
    case types.arrowUp:
    case types.arrowRight:
    case types.arrowLeft:
      return (
        <I className={className}>
          <Svg size={size} viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
            <path fill={fill} d={getArrowIconPath(type)} />
          </Svg>
        </I>
      );
  }
};

export default Icon;
