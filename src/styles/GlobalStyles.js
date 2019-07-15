import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

const GlobalStyles = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-size: 12px;
    height: 100%;
  }
  body { 
    padding: 0;
    margin: 0;
    height: 100%;
    font-size: 1.5rem;
    line-height: 1;
    font-family: Roboto;
    #__next {
      width: 100%;
      height: 100%;
      display: flex;
    }
  }
  *, *:before, *:after {
    box-sizing: inherit;
    outline: none;
  }

  [type="search"] {
    appearance: initial;
  }
  h1, h2, h3 ,h4 {
    margin-top: 0;
  }
`;

export default GlobalStyles;
