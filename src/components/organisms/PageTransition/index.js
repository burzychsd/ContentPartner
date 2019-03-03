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

    background: #FFF;
    transition: all 1s cubic-bezier(0.86, 0, 0.07, 1);
`

const transitionRoot = typeof document !== `undefined` ? document.getElementById('page_transition') : null

class PageTransition extends React.Component {

    el = typeof document !== `undefined` ? document.createElement('div') : null

    componentDidMount = async () => {
        document.body.style.overflow = await 'hidden'
        document.body.style.paddingRight = await '18px'
        const condition = this.props.status === 'onExit'
        await transitionRoot.appendChild(this.el)
        this.el.style = await Wrapper
        if (condition) { this.el.style.opacity = await 1 } else { this.el.style.opacity = await 0 }
        await setTimeout(() => this.el.style.opacity = condition ? 0 : 1, condition ? 600 : 100)
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