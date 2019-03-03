import React from "react"
import ReactDOM from 'react-dom'
import { css } from 'styled-components'

const Wrapper = css`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
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

const transitionRoot = typeof document !== `undefined` ? document.getElementById('page_transition') : null

class PageTransition extends React.Component {

    el = typeof document !== `undefined` ? document.createElement('div') : null

    componentDidMount = async () => {
        const scrollBarWidth = typeof document !== `undefined` && typeof window !== `undefined` ? window.innerWidth - document.body.offsetWidth : null
        console.log(scrollBarWidth)
        document.body.style.overflow = await 'hidden'
        document.body.style.paddingRight = await scrollBarWidth
        const condition = this.props.status === 'onExit'
        await transitionRoot.appendChild(this.el)
        this.el.style = await Wrapper
        if (condition) { this.el.style.opacity = await 1 } else { this.el.style.opacity = await 0 }
        await setTimeout(() => this.el.style.opacity = condition ? 0 : 1, 300)
    }

    componentWillUnmount = () => {
        transitionRoot.removeChild(this.el)
        this.el.style.opacity = 0
        document.body.style.overflow = 'auto'
        document.body.style.paddingRight = 0
    }

    render() {
        const { children } = this.props

        if (this.el) {
            return ReactDOM.createPortal(children, this.el)
          } else {
            return null
        }
    }
}

export default PageTransition