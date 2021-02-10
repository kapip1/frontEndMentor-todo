import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,700;1,400&display=swap');
    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 62.5%;
    }
    body {
        font-size: 1.8rem;
    }
    input:focus {
        outline: none; 
    }
    :root {
        font-family: 'Josefin Sans', sans-serif;
        --font-color: hsl(234, 39%, 85%);
    }
`;
export default GlobalStyle;
