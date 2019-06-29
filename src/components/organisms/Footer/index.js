// DEPENDENCIES
import React, { memo } from 'react'

// COMPONENTS
import Flex from './../../atoms/Flex'

const Footer = React.forwardRef((props, innerRef) => {
    return (
        <Flex as='footer' ref={innerRef ? innerRef : null} reset css={tw`bg-dark_puce w-full`} style={{ ...props.style, height: '3.5rem' }}>

        </Flex>
    )
})

export default memo(Footer)