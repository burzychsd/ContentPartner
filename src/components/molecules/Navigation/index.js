// DEPENDENCIES
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Logo from './../../../images/svg/Bulb.svg'
import Hamburger from '../Hamburger'

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