// DEPENDENCIES
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useTrail, useSpring, animated } from 'react-spring'
import { zeroRightClassName } from 'react-remove-scroll-bar'
import loadable from '@loadable/component'

// COMPONENTS
import Flex from './../../atoms/Flex'
const NavLinks = loadable(() => import('./../../molecules/NavLinks'))

const AnimatedFlex = animated(Flex)

// STYLES
import './Menu.css'

const Menu = (props) => {

    const { links, toggle, setToggle, paddingTop } = props

    const config1 = { mass: 1, tension: 120, friction: 20 }
    const config2 = { mass: 1, tension: 280, friction: 25 }
    const setSpringStyles = { opacity: toggle ? 1 : 0 }
    const setTrailStyles = { opacity: toggle ? 1 : 0, transform: toggle ? 'translateY(0px)' : 'translateY(5px)' }
    const spring = { from: { opacity: 0 } }
    const trail = { from: { opacity: 0, transform: 'translateY(5px)' } }

    const [menuContainerStyle, setMenuContainerStyle] = useSpring(() => ({ ...spring }))
    const [linkTrailsStyle, setLinkTrailsStyle] = useTrail(links.length, () => ({ ...trail }))

    setMenuContainerStyle({ ...setSpringStyles, config: config1, delay: toggle ? 0.001 : 600 })
    setLinkTrailsStyle({ ...setTrailStyles, config: config2, delay: toggle ? 600 : 0.001 })

    const container = (menuContainerStyle, paddingTop) => ({
        reset: true,
        style: { ...menuContainerStyle,
            visibility: menuContainerStyle.opacity.interpolate(o => o === 0 ? 'hidden' : 'visible'), 
            height: '100%', paddingTop }
    })

    return (
        <AnimatedFlex className={`menu_container ${zeroRightClassName}`} {...container(menuContainerStyle, paddingTop)} css={tw`fixed m-auto bg-white z-40`}>
            <NavLinks
            links={links}
            setToggle={setToggle}
            trail={linkTrailsStyle} />
        </AnimatedFlex>
    )
}

Menu.propTypes = {
    links: PropTypes.array.isRequired,
    toggle: PropTypes.bool.isRequired,
    setToggle: PropTypes.func.isRequired,
}

export default memo(Menu)