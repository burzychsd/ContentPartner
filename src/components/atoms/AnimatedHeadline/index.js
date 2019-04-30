// DEPENDENCIES
import React from 'react'
import TextAnim from 'rc-texty'
import styled from 'styled-components'

// STYLED_SYSTEM
import { fluid } from './../../../design_system/typography'
import { Lg } from './../../../design_system/breakpoints'

const Animated = styled(TextAnim)`
    width: 80%;
    margin: 0.5em auto;
    line-height: 1em;
    text-align: center;

    & > span {
        font-size: ${fluid(24, 28, 320, Lg)};
    }
`

const AnimatedHeadline = () => (
    <Animated component='h1' duration={600}>{`${'>'} Strona w trakcie budowy`}</Animated>
)

export default AnimatedHeadline