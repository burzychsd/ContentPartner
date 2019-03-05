import { createGlobalStyle, keyframes } from 'styled-components'
import * as text from './typography'
import * as colors from './colors'
import bg from './../images/png/background.png'

const dash = keyframes`
    to {
        stroke-dashoffset: 0;
    }
`

export const styles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        -webkit-tap-highlight-color: transparent;
    }
    html {
        background: ${colors.Accent};
        height: 100%;
    }
    body {
        font-family: ${text.fontPrimary};
        font-size: ${text.baseSize}
        color: ${colors.text};
        line-height: ${text.bodyLineHeight};
        background: url(${bg}) no-repeat center center;
        background-size: cover;
        transform: scale(1, 1);
        overflow: hidden;
        min-height: 100%;
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
    .tl-wrapper {
        height: 100%;
    }
    .gatsby-image-outer-wrapper, 
    .gatsby-image-wrapper {
        height: 100%; 
    }
    .light {
        stroke-dasharray: 116 118;
        stroke-dashoffset: 117;
        animation: ${dash} 1.6s cubic-bezier(0.86, 0, 0.07, 1) 400ms;
    }

`