import React, { Fragment } from 'react'
import styled from 'styled-components'
import shortid from 'shortid'
import { Flex } from './../../../design_system/flexbox'
import Background from './../AnimatedBackground'
import Link from './../../atoms/TransitionLink'
import Logo from './../../atoms/Logo'
import Hamburger from './../../atoms/Hamburger'

const MenuContainer = styled(Flex)`
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1140px;
    padding: 2rem 5rem;
    top: 50px;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 997;
`

const ListContainer = styled(Flex)`
    width: 100%;
    flex-flow: ${props => props.direction || 'column nowrap'};
    transition: opacity 0.55s cubic-bezier(0.86, 0, 0.07, 1);
`

const ListItem = styled.li`
    margin: ${props => props.margin || '0.3em auto'};
    text-align: center;

    &:first-child {
        margin: ${props => props.margin || '0.6em 0 0.3em 0'};
    }

    &:last-child {
        margin: ${props => props.margin || '0.3em 0 0.6em 0'};
    }
`

const list = ['O mnie', 'Oferta', 'Portfolio', 'Kontakt', 'Blog']
const regex = /\s+/

const Navigation = ({ clicked, status, innerRefs, menuContainer, innerGridRefs, location, overlay, handleTransition }) => {

    const links = list.map((item, i) => 
        <ListItem key={shortid.generate()}>
            <Link location={location} delay={1300} to={`/${item.toLowerCase().replace(regex, '-')}`} 
            clicked={location.pathname !== `/${item.toLowerCase().replace(regex, '-')}` ? clicked : null}>
                {item}
            </Link>
        </ListItem>
    )

    return (
        <Fragment>
            <Logo clicked={clicked} status={status} location={location} handleTransition={handleTransition} />
            <Hamburger clicked={clicked} status={status} innerRefs={innerRefs} />
            <MenuContainer as='nav' ref={menuContainer} style={{ visibility: 'hidden', opacity: 0 }}>
                <ListContainer as='ul' style={{ opacity: `${status ? 1 : 0}` }}>
                    {links}
                </ListContainer>
                <Background {...innerGridRefs} overlay={overlay} />
            </MenuContainer>
        </Fragment>
    )
}

export default Navigation