// DEPENDENCIES
import React, { useRef, memo } from 'react'
import PropTypes from 'prop-types'
import { useChain, animated } from 'react-spring'
import loadable from '@loadable/component'

// COMPONENTS
import Flex from './../../atoms/Flex'

// LAZY LOAD
const NavLinks = loadable(() => import('./../../molecules/NavLinks'))

const AnimatedFlex = animated(Flex)

// ANIMATION
import { menuAnimation, trailLinks } from './animation'

// PROPS
import { container } from './props'

// STYLES
import './Menu.css'

const Menu = (props) => {

    const { links, toggle, setToggle, innerRef } = props

    const menuContainer = useRef()
    const navLinkItem = useRef()

    const menuContainerStyle = menuAnimation(menuContainer, toggle)
    const trail = trailLinks(navLinkItem, toggle, links)

    useChain(toggle ? [menuContainer, navLinkItem] : [navLinkItem, menuContainer], [0, 0.6])

    const containerProps = container(menuContainerStyle)

    return (
        <AnimatedFlex className={`menu_container`} ref={innerRef} {...containerProps} css={tw`fixed w-screen m-auto bg-white z-40`}>
            <NavLinks
            links={links}
            setToggle={setToggle}
            trail={trail} />
        </AnimatedFlex>
    )
}

Menu.propTypes = {
    links: PropTypes.array.isRequired,
    toggle: PropTypes.bool.isRequired,
    setToggle: PropTypes.func.isRequired,
}

export default memo(Menu)