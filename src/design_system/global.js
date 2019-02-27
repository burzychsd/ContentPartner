import { createGlobalStyle } from 'styled-components'
import * as text from './typography'
import * as colors from './colors'
import bg from './../images/background.png'

export const styles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        -webkit-tap-highlight-color: transparent;
    }
    html,
    body {
        height: 100vh;
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
    #___gatsby {
        max-width: 1140px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }
`