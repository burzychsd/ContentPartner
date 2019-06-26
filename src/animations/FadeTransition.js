import React from 'react'
import { Transition } from 'react-spring/renderprops'

const FadeTransition = ({ children, items }) => (
    <Transition
    native
    items={items}
    from={{ opacity: 0 }}
    enter={{ opacity: 1 }}
    leave={{ opacity: 0 }}
    config={{ mass: 1, tension: 210, friction: 20 }}>
        {children}
    </Transition>
)

export default FadeTransition