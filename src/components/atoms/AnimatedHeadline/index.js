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

const AnimatedHeadline = ({ showHeadline }) => (
    <Animated component='h1' delay={400} duration={600} style={{ opacity: showHeadline ? 1 : 0, transition: 'opacity 0.4s cubic-bezier(0.86, 0, 0.07, 1)' }}>{`${'>'} Strona w trakcie budowy`}</Animated>
)

export default AnimatedHeadline