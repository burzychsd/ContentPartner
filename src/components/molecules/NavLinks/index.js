import React from 'react'
import styled from 'styled-components'
import { Flex } from './../../../design_system/flexbox'
import NavLink from './../../atoms/TransitionLink'
import shortid from 'shortid'
import { Gray4 } from './../../../design_system/colors'

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

const NavLinks = ({ list, direction }) => {

    const regex = /\s+/

    const links = list.map((item, i) => 
        <ListItem key={shortid.generate()}>
            <NavLink to={`/${item.toLowerCase().replace(regex, '-')}`}  activeStyle={{ color: `${Gray4}` }}>
                {item}
            </NavLink>
        </ListItem>
    )

    return (
        <Container as='ul' direction={direction}>
            {links}
        </Container>
    )
}

export default NavLinks