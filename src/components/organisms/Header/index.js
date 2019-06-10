// DEPENDENCIES
import React, { memo } from 'react'
import PropTypes from 'prop-types'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Navigation from './../../molecules/Navigation'

// PROPS
import { headerProps, navProps } from './props'

const Header = (props) => {

    const { toggle, setToggle, innerRef } = props

    return (
        <Flex ref={innerRef} {...headerProps} reset css={tw`w-full absolute z-50`}>
            <Navigation {...navProps} toggle={toggle} setToggle={setToggle} />
        </Flex>
    )
}

Header.propTypes = {
    toggle: PropTypes.bool.isRequired,
    setToggle: PropTypes.func.isRequired
}

export default memo(Header)