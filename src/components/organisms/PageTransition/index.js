import React from "react"
import styled from 'styled-components'
import { Flex } from './../../../design_system/flexbox'

const PageTransition = styled(Flex)`
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    opacity: 0;

    background: #F6F5F5;
    transition: all 0.2s cubic-bezier(0.19, 1, 0.22, 1);
`

class PageTransition extends React.Component {

    container = React.createRef()

    render() {
        const { children } = this.props

        return (
            <Wrapper ref={this.container}>
                {children}
            </Wrapper>
        )
    }
}

export default PageTransition