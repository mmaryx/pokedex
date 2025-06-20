import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

  :root {
    --elements-color: rgba(255, 255, 255, 0.2);
    --card-color: rgb(167, 167, 167);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Montserrat', sans-serif;
    background-color: #f8f8f8;
    color: #fff;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
