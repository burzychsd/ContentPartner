import React from 'react'
import styled from 'styled-components'
import logo from './../../../images/Bulb.svg'
import { Flex } from './../../../design_system/flexbox'
import Link from './../TransitionLink'

const FlexDiv = styled(Flex)`
    position: relative;
    width: ${props => props.width || '64px'};
    height: ${props => props.height || '64px'};
    justify-content: center;
    cursor: pointer;
    z-index: 999;
`

const Image = styled.img`
    height: 100%;
`

const Logo = (props) => (
    <FlexDiv {...props}>
        <Link location={null} customStyles='height: 100%' to='/' delay={1000} clicked={props.status ? props.clicked : null}>
            <Image src={logo} alt='logo' />
        </Link>
    </FlexDiv>
)

export default Logo