import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'poppins', sans-serif;
  }
 html, body, :root{
    min-height: 100vh;
    background-color: #E6E6E6;
    background-color: black;
    font-size: 14px;
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
