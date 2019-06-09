// DEPENDENCIES
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import loadable from '@loadable/component'

// COMPONENTS
import Flex from './../../atoms/Flex'

// LAZY LOAD
const Logo = loadable(() => import(/* webpackPrefetch: true */ './../../../images/svg/Bulb.svg'))
const Hamburger = loadable(() => import(/* webpackPrefetch: true */ '../Hamburger'))

// PROPS
import { navProps, logoProps } from './props'

const Navigation = (props) => {

    const { height, toggle, setToggle } = props

    const handleLogoClick = () => {
        setToggle(false)
        navigate('/')
    }

    return (
        <Flex {...navProps} style={{ height }} css={tw`w-full justify-between items-center`}>
            <Logo {...logoProps} css={tw`cursor-pointer`} onClick={e => handleLogoClick()}/>
            <Hamburger toggle={toggle} setToggle={setToggle} />
        </Flex>
    )
}

Navigation.propTypes = {
    height: PropTypes.string.isRequired,
    toggle: PropTypes.bool.isRequired,
    setToggle: PropTypes.func.isRequired
}

export default memo(Navigation)