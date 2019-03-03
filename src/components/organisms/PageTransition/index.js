import React from "react"
import styled from 'styled-components'
import { Flex } from './../../../design_system/flexbox'

const Wrapper = styled(Flex)`
    position: fixed;
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

    background: #FFF;
    transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
`

class PageTransition extends React.Component {

    container = React.createRef()

    componentDidMount = async () => {
        const scrollBarWidth = typeof document !== `undefined` && typeof window !== `undefined` ? window.innerWidth - document.body.offsetWidth : null
        const condition = this.props.status === 'onExit'

        document.body.style.overflow = await 'hidden'
        document.body.style.paddingRight = await scrollBarWidth
        if (condition) { this.container.current.style.opacity = await 1 } else { this.container.current.style.opacity = await 0 }
        await setTimeout(() => this.container.current.style.opacity = condition ? 0 : 1, 300)
    }

    componentWillUnmount = () => {
        this.container.current.style.opacity = 0
        document.body.style.overflow = 'auto'
        document.body.style.paddingRight = 0
    }

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