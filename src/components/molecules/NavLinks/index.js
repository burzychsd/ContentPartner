import React from 'react'
import styled from 'styled-components'
import { Flex } from './../../../design_system/flexbox'
import Link from './../../atoms/TransitionLink'
import shortid from 'shortid'

const Container = styled(Flex)`
    flex-flow: ${props => props.direction || 'column nowrap'};
`

const NavLinks = ({ list }) => {

    const regex = /\s+/

    const links = list.map((item, i) => 
        <Link key={shortid.generate()} to={i === 0 ? '/' : item.toLowerCase().replace(regex, '-')}>
            {item}
        </Link>
    )

    return (
        <Container as='ul'>
            {links}
        </Container>
    )
}

export default NavLinks