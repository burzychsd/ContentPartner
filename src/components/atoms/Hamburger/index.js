import React from 'react'
import styled from 'styled-components'
import { Primary } from './../../../design_system/colors'

const FlexDiv = styled.div`
    position: relative;
    width: ${props => props.width || '64px'};
    height: ${props => props.height || '64px'};
    cursor: pointer;
    z-index: 999;
`

const Bar = styled.div`
    position: absolute;
    width: 38px;
    height: 1px;
    background: ${Primary};
    ${props => props.top ? `top: ${props.top}px` : null};
    right: 0;
    ${props => props.bottom ? `bottom: ${props.bottom}px` : null};
    left: 0;
    margin: 0 auto;
`

const Hamburger = ({ clicked, status, innerRefs, props }) => (
    <FlexDiv {...props} onClick={clicked}>
        <Bar top={22} ref={innerRefs.first} />
        <Bar bottom={22} ref={innerRefs.second} />
    </FlexDiv>
)

export default Hamburger