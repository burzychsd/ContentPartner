import React from 'react'
import styled from 'styled-components'
import bar from './../../../images/bar.svg'

const FlexDiv = styled.div`
    position: relative;
    width: ${props => props.width || '64px'};
    height: ${props => props.height || '64px'};
    cursor: pointer;
    z-index: 998;
`

const Bar = styled.img`
    position: absolute;
    width: 38px;
    ${props => props.top ? `top: ${props.top}px` : null};
    right: 0;
    ${props => props.bottom ? `bottom: ${props.bottom}px` : null};
    left: 0;
    margin: 0 auto;
`

const Hamburger = ({ clicked, status, innerRefs, props }) => (
    <FlexDiv {...props} onClick={clicked}>
        <Bar top={22} ref={innerRefs.first} src={bar} alt='bar1' />
        <Bar bottom={22} ref={innerRefs.second} src={bar} alt='bar2' />
    </FlexDiv>
)

export default Hamburger