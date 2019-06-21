// DEPENDENCIES
import React, { memo } from 'react'

// COMPONENTS
import Flex from './../../atoms/Flex'

const Footer = () => {
    return (
        <Flex as='footer' reset css={tw`bg-dark_puce w-full`} style={{ height: '3.5rem' }}>

        </Flex>
    )
}

export default memo(Footer)