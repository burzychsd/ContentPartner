import { createGlobalStyle, keyframes } from 'styled-components'
import * as text from './typography'
import * as colors from './colors'
import bg from './../images/png/background.png'

const dash = keyframes`
    0% {
        stroke-dashoffset: 900;
        stroke-opacity: 0;
        opacity: 0;
        fill: #463E43;
    }

    50% {
        stroke-opacity: 1;
        opacity: 1;
    }
    
    100% {
        stroke-dashoffset: 0;
        stroke-opacity: 0;
        opacity: 0;
        fill: none;
    }
`

export const styles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        -webkit-tap-highlight-color: transparent;
    }
    html,
    body {
        min-height: 100%;
    }
    html {
        background: url(${bg}) no-repeat center center;
        background-size: cover;
    }
    body {
        font-family: ${text.fontPrimary};
        font-size: ${text.baseSize}
        color: ${colors.text};
        line-height: ${text.bodyLineHeight};
    }
    ol, ul {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    .gatsby-image-outer-wrapper, 
    .gatsby-image-wrapper {
        height: 100%; 
    }
    .path {
        stroke-dasharray: 900;
        stroke-dashoffset: 900;
        animation: ${dash} 2.2s cubic-bezier(0.86, 0, 0.07, 1);
        transition: opacity 600ms cubic-bezier(0.86, 0, 0.07, 1);
    }

`