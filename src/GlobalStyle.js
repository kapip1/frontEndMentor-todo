import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
        font-family: 'Josefin Sans', sans-serif;
    }
    input:focus, button:focus {
        outline: none;
    }
    span, input, button {
        cursor: pointer;
    }
    :root {
        --font-color: ${({ darkMode }) =>
          darkMode ? 'hsl(234, 39%, 85%)' : 'hsl(235, 19%, 35%)'} ;
        --color-hover: hsl(236, 33%, 92%);
        --font-color-greyish: hsl(234, 11%, 52%);
        --task-color-dark: ${({ darkMode }) =>
          darkMode ? 'hsl(235, 24%, 19%)' : 'hsl(0, 0%, 98%)'};
        --font-color-unactive: hsl(235, 24%, 19%, 0.1);


    }
`;
export default GlobalStyle;
