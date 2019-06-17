import React from 'react'
import { Spring } from 'react-spring/renderprops'

const SlideIn = ({ children, status, direction }) => (
    <Spring
    native
    from={{ opacity: 0, transform: direction === 'left' ? 'translateX(-100)' : 'translateX(100)' }}
    to={{ opacity: 1, transform: status ? 'translateX(0)' : direction === 'left' ? 'translateX(100)' : 'translateX(-100)' }}>
        {children}
    </Spring>
)

export default SlideIn