import React from 'react'
import styled from 'styled-components'
import Bulb from './../../../images/Bulb.svg'
import { Lg } from './../../../design_system/breakpoints'
import { Flex } from './../../../design_system/flexbox'
import Link from './../TransitionLink'

const FlexDiv = styled(Flex)`
    position: relative;
    width: ${props => props.width || '64px'};
    height: ${props => props.height || '64px'};
    justify-content: center;
    cursor: pointer;
    z-index: 999;

    @media (min-width: ${Lg}px) {
        &:hover > a > svg > g > #light {
            opacity: 1;
            transition: all 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
    }
`

const Logo = (props) => (
    <FlexDiv {...props}>
        <Link location={props.location} customStyles='height: 100%' to='/' delay={1200} clicked={props.location.pathname !== '/' && props.status ? props.clicked : null} handleTransition={props.handleTransition}>
            <Bulb style={{ height: '100%' }} />
        </Link>
    </FlexDiv>
)

export default Logo