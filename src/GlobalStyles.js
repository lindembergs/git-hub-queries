import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'poppins', sans-serif;
  }
  body{
    min-height: 100vh;
  }
  button{
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }

  ul{
    list-style: none;
  }
`;
