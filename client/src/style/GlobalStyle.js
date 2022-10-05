import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.pageBackground};
    color: ${props => props.theme.titleColor};
  }
`;

export default GlobalStyle;