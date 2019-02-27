import React from 'react'
import styled from 'styled-components'
import logo from './../../../images/Bulb.svg'
import { Flex } from './../../../design_system/flexbox'
import TransitionLink from 'gatsby-plugin-transition-link'

const FlexDiv = styled(Flex)`
    width: ${props => props.width || '64px'};
    height: ${props => props.height || '64px'};
    justify-content: center;
    cursor: pointer;
`

const Image = styled.img`
    height: 100%;
`

const Logo = (props) => (
    <FlexDiv {...props}>
        <TransitionLink to='/'>
            <Image src={logo} alt='logo' />
        </TransitionLink>
    </FlexDiv>
)

export default Logo