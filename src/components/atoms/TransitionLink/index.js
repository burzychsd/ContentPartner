// DEPENDENCIES
import React, { PureComponent } from 'react'
import { navigate } from 'gatsby-link'

// COMPONENTS
import { NavLink } from './styled'

// STYLED_SYSTEM
import { Primary, Gray4 } from './../../../design_system/colors'

class Link extends PureComponent {

    handleClick = (e, link) => {
        const { clicked, handleTransition, location, to, delay } = this.props

        e.stopPropagation()
        e.preventDefault()
        
        if (clicked) { clicked(e, link) }
        if (handleTransition && !clicked && 
            location.pathname !== to) {
            handleTransition()
        }
        if (location.pathname !== to) {
            setTimeout(() => navigate(to), delay)
        }
    }

    isCurrent = () => {
        const { location, to } = this.props

        if (location) {
            return location.pathname === to
        } else {
            return false
        }
    }

    render() {
        const { customStyles, children } = this.props

        return (
            <NavLink onClick={(e) => this.handleClick(e, 'link')} customStyles={customStyles} style={{ color: `${ this.isCurrent() ? Gray4 : Primary }` }}>{children}</NavLink>
        )
    }
}

export default Link