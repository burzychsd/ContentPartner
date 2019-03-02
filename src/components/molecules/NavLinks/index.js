import React from 'react'
import styled from 'styled-components'
import { Flex } from './../../../design_system/flexbox'
import shortid from 'shortid'

const Container = styled(Flex)`
    flex-flow: ${props => props.direction || 'column nowrap'};
`
const ListItem = styled.li`
    margin: ${props => props.margin || '0.3em 0'};

    &:first-child {
        margin: ${props => props.margin || '0.6em 0 0.3em 0'};
    }

    &:last-child {
        margin: ${props => props.margin || '0.3em 0 0.6em 0'};
    }
`

const NavLinks = ({ list, direction, location, animationEnd, clicked }) => {

    const regex = /\s+/

    const links = list.map((item, i) => 
        <ListItem key={shortid.generate()}>
            <Link location={location} delay={1000} to={`/${item.toLowerCase().replace(regex, '-')}`} animationEnd={animationEnd} clicked={clicked}>
                {item}
            </Link>
        </ListItem>
    )

    return (
        <Container as='ul' direction={direction}>
            {links}
        </Container>
    )
}

export default NavLinks