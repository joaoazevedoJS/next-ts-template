import { createGlobalStyle } from "styled-components";

import { variables } from "./variables";

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${variables.colors.dark_0};
  }

  button {
    cursor: pointer;
  }

  body, button, input, textarea {
    font-family: ${variables.fonts.secondary}
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${variables.fonts.primary}
  }
`;
