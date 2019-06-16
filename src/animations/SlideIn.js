import React from 'react'
import { String } from 'react-spring/renderprops'

const SlideIn = ({ children, status, direction }) => (
    <Spring
    native
    from={{ opacity: 0, x: direction === 'left' ? -100 : 100 }}
    to={{ opacity: 1, x: status ? 0 : direction === 'left' ? -100 : 100 }}>
        {children}
    </Spring>
)

export default SlideIn