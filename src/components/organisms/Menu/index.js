// DEPENDENCIES
import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useSpring, useTrail, useChain, animated } from 'react-spring'

// COMPONENTS
import Flex from './../../atoms/Flex'
import NavLinks from './../../molecules/NavLinks'

const AnimatedFlex = animated(Flex)

const Menu = (props) => {

    const { links, headerHeight, toggle, setToggle } = props

    const menuContainer = useRef()
    const navLinkItem = useRef()

    const menuContainerStyle = useSpring({
        config: { mass: 1, tension: 60, friction: 20 },
        opacity: toggle ? 1 : 0,
        transform: `translateY(${ toggle ? '0%' : '-100%' })`,
        ref: menuContainer })

    const trail = useTrail(links.length, {
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 20,
        ref: navLinkItem,
        from: { opacity: 0, x: 20 },
    })

    useChain(toggle ? [menuContainer, navLinkItem] : [navLinkItem, menuContainer], [0, 0.6])

    const containerProps = {
        reset: true,
        style: { ...menuContainerStyle,
            top: headerHeight / 2 + 40, minHeight: `calc(100% - ${headerHeight / 2 + 40}px)`,
            paddingTop: headerHeight / 2 }
    }

    const navLinksProps = {
        links,
        setToggle,
        trail
    }

    return (
        <AnimatedFlex {...containerProps} css={tw`absolute w-full m-auto bg-white z-40`}>
            <NavLinks {...navLinksProps} />
        </AnimatedFlex>
    )
}

Menu.propTypes = {
    links: PropTypes.array.isRequired,
    headerHeight: PropTypes.number.isRequired,
    toggle: PropTypes.bool.isRequired,
    setToggle: PropTypes.func.isRequired
}

export default Menu