// DEPENDENCIES
import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Logo from './../../../images/svg/Bulb.svg'
import Hamburger from './../Hamburger'

const Navigation = (props) => {

    const { height, toggle, setToggle, greaterThanMd, orientation } = props

    const navProps = {
        as: `nav`,
        reset: true,
        style: { height }
    }

    const handleLogoClick = () => {
        setToggle(false)
        navigate('/')
    }

    const logoProps = {
        style: { width: 'auto', height: '85%' },
        onClick: () => handleLogoClick()
    }

    const hamburgerProps = {
        toggle,
        setToggle,
        style: { width: greaterThanMd && orientation === 'portrait' ? 70 : 40, 
                height: greaterThanMd && orientation === 'portrait' ? 70 : 40 }
    }

    return (
        <Flex {...navProps} reset css={tw`w-full justify-between items-center`}>
            <Logo {...logoProps} css={tw`cursor-pointer`} />
            <Hamburger {...hamburgerProps} />
        </Flex>
    )
}

Navigation.propTypes = {
    height: PropTypes.string.isRequired,
    toggle: PropTypes.bool.isRequired,
    setToggle: PropTypes.func.isRequired,
    greaterThanMd: PropTypes.bool.isRequired,
    orientation: PropTypes.string.isRequired
}

export default Navigation