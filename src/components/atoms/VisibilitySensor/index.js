// DEPENDENCIES
import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import VSensor from 'react-visibility-sensor'

const VisibilitySensor = (props) => {

    const { once, children, ...theRest } = props
    const [active, setActive] = useState(true)

    return (
        <VSensor
        {...theRest}
        active={active}
        onChange={isVisible => 
            once &&
            isVisible &&
            setActive(false)
        }>
            {({ isVisible }) => children({ isVisible })}
        </VSensor>
    )
}

VisibilitySensor.propTypes = {
    once: PropTypes.bool,
    children: PropTypes.func.isRequired
}

export default memo(VisibilitySensor)