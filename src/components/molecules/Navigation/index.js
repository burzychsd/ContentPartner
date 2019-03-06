// DEPENDENCIES
import React, { Fragment } from 'react'
import shortid from 'shortid'

// COMPONENTS
import Background from './../AnimatedBackground'
import Link from './../../atoms/TransitionLink'
import Logo from './../../atoms/Logo'
import Hamburger from './../../atoms/Hamburger'
import { MenuContainer, ListContainer, ListItem } from './styled'

const list = ['O mnie', 'Oferta', 'Portfolio', 'Kontakt', 'Blog']
const regex = /\s+/

const Navigation = ({ clicked, status, innerRefs, menuContainer, innerGridRefs, location, overlay, handleTransition, endTime }) => {

    const links = list.map((item, i) => 
        <ListItem key={shortid.generate()}>
            <Link location={location} delay={endTime} to={`/${item.toLowerCase().replace(regex, '-')}`} 
            clicked={location.pathname !== `/${item.toLowerCase().replace(regex, '-')}` ? clicked : null}>
                {item}
            </Link>
        </ListItem>
    )

    return (
        <Fragment>
            <Logo clicked={clicked} status={status} location={location} handleTransition={handleTransition} endTime={endTime} />
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