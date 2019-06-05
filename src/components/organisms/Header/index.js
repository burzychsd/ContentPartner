// DEPENDENCIES
import React from 'react'

import PropTypes from 'prop-types'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Navigation from './../../molecules/Navigation'

const Header = (props) => {

    const { greaterThanMd, orientation, toggle, setToggle, innerRef } = props

    const headerProps = {
        as: `header`,
        style: {
            height: `12vh`,
            padding: `${greaterThanMd ? '0 2rem' : '0 1.5rem'}`,
            minHeight: `80px`,
            top: `30px`,
            right: 0,
            left: 0
        },
        ref: innerRef
    }

    const navProps = {
        height: '100%',
        toggle,
        setToggle,
        greaterThanMd,
        orientation
    }

    return (
        <Flex {...headerProps} reset css={tw`w-full absolute z-50`}>
            <Navigation {...navProps} />
        </Flex>
    )
}

Header.propTypes = {
    greaterThanMd: PropTypes.bool.isRequired,
    orientation: PropTypes.string.isRequired,
    toggle: PropTypes.bool.isRequired,
    setToggle: PropTypes.func.isRequired
}

export default Header