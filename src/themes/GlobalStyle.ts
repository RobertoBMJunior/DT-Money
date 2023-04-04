import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.6;
    }

    body{
        background-color: ${props => props.theme['gray-2']};
    }

    body, input, button{
        color: ${props => props.theme['gray-6']};
    }
`