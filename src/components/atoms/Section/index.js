// DEPENDENCIES
import React from 'react'

// COMPONENTS
import { Wrapper } from './styled'

const Section = ({ children, height, minHeight, maxHeight, margin }) => (
    <Wrapper as='section' height={height} minHeight={minHeight} maxHeight={maxHeight} margin={margin}>{children}</Wrapper>
)

export default Section