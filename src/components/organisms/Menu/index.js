// DEPENDENCIES
import React, { useRef, memo } from 'react'
import PropTypes from 'prop-types'
import { useSpring, useTrail, useChain, animated } from 'react-spring'

// COMPONENTS
import Flex from './../../atoms/Flex'
import NavLinks from './../../molecules/NavLinks'

const AnimatedFlex = animated(Flex)

// ANIMATION
import { menuAnimation, trailLinks } from './animation'

// PROPS
import { container } from './props'

const Menu = (props) => {

    const { links, headerHeight, toggle, setToggle } = props

    const menuContainer = useRef()
    const navLinkItem = useRef()

    const menuContainerStyle = menuAnimation(menuContainer, toggle)
    const trail = trailLinks(navLinkItem, toggle, links)

    useChain(toggle ? [menuContainer, navLinkItem] : [navLinkItem, menuContainer], [0, 0.6])

    const containerProps = container(menuContainerStyle, headerHeight)

    return (
        <AnimatedFlex {...containerProps} css={tw`absolute w-full m-auto bg-white z-40`}>
            <NavLinks
            links={links}
            setToggle={setToggle}
            trail={trail} />
        </AnimatedFlex>
    )
}

Menu.propTypes = {
    links: PropTypes.array.isRequired,
    headerHeight: PropTypes.number.isRequired,
    toggle: PropTypes.bool.isRequired,
    setToggle: PropTypes.func.isRequired
}

export default memo(Menu)