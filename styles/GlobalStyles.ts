"use client";

import { styled, createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
  background-color: #222;
  color: #000000;
  font-feature-settings: "case";
  max-width: 100%;
  font-family: 'Inter', sans-serif; 
}

li {
  text-decoration: none;
  list-style: none;

  transition: all 0.2s ease;
}

a {
  text-decoration: none;
  width: fit-content;
  color: #000000;

  transition: all 0.2s ease;
}
`;

export default GlobalStyles;
