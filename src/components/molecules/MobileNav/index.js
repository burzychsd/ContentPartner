import React from 'react'
import styled from 'styled-components'
import { Flex } from './../../../design_system/flexbox'
import Logo from './../../atoms/Logo'
import Hamburger from './../../atoms/Hamburger'

const Navigation = styled(Flex)`
    width: 100%;
    justify-content: space-between;
`

const MobileNav = ({ clicked, status, innerRefs }) => (
    <Navigation as='nav'>
        <Logo clicked={clicked} status={status} />
        <Hamburger clicked={clicked} status={status} innerRefs={innerRefs} />
    </Navigation>
)

export default MobileNav