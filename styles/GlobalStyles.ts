"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
  background-color: #EEF5F9;
  color: #000000;
  font-feature-settings: "case";
  max-width: 100%;
  font-family: 'Inter', sans-serif; 
}

li {
  text-decoration: none;
  list-style: none;
}

a {
  text-decoration: none;
  width: fit-content;
  color: #000000;
}
`;

export default GlobalStyles;
