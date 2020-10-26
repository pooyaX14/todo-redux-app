import { createGlobalStyle } from 'styled-components';
import { themeType } from './config/theme'

export const GlobalStyles = createGlobalStyle<{ theme: themeType }>`
    body {
        background: ${({ theme }) => theme.background };
        color: ${({ theme }) => theme.text };
        font-family: Tahoma, Arial, Helvetica, Roboto, sans-serif;
        transition: all 0.5s linear;
    }
`