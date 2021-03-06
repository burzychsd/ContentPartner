// DEPENDENCIES
import React, { memo } from 'react'
import shortid from 'shortid'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'

// COMPONENTS
import Flex from './../../atoms/Flex'
import NavLink from './../../atoms/NavLink'

const AnimatedNavLink = animated(NavLink)

// STYLES
import './NavLinks.css'

// PROPS
import { containerProps, linkContainerProps, linkProps } from './props'

const NavLinks = props => {

    const { links, setToggle, trail } = props

    return (
        <Flex {...containerProps} css={tw`w-4/5 mx-auto justify-center align-items`}>
            <Flex {...linkContainerProps} css={tw`w-auto h-auto flex-col align-items`}>
                {trail.map((props, i) => 
                    <AnimatedNavLink
                    style={{ ...props }}
                    to={`/${links[i].replace(/\s+/g, '-').toLowerCase()}/`}
                    key={i}
                    onClick={() => setToggle(toggle => !toggle)}
                    {...linkProps}>{links[i]}</AnimatedNavLink>
                )}
            </Flex>
        </Flex>
    )
}

NavLinks.propTypes = {
    links: PropTypes.array.isRequired,
    setToggle: PropTypes.func.isRequired
}

export default memo(NavLinks)