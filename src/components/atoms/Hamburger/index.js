import React from 'react'
import styled from 'styled-components'
import { Flex } from './../../../design_system/flexbox'
import bar from './../../../images/bar.svg'

const FlexDiv = styled(Flex)`
    width: ${props => props.width || '64px'};
    height: ${props => props.height || '64px'};
    justify-content: space-around;
    flex-flow: column nowrap;
    padding: 1em;
    cursor: pointer;
`

const Bar = styled.img`
    width: 100%;
`

const Hamburger = (props) => (
    <FlexDiv {...props}>
        <Bar src={bar} alt='bar1' />
        <Bar src={bar} alt='bar2' />
    </FlexDiv>
)

export default Hamburger