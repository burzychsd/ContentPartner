import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Flex } from './../../../design_system/flexbox'
import MobileNav from './../../molecules/MobileNav'
import Link from './../../atoms/TransitionLink'
import shortid from 'shortid'
import Background from './../../molecules/MenuBackground'
import { TimelineLite, Power2 } from 'gsap/TweenMax'

const HeaderContainer = styled(Flex)`
    position: fixed;
    width: 100%;
    max-width: 1140px;
    height: 100px;
    margin-top: 15px;
    padding: 0 1.5em;

    align-items: center;
    z-index: 1000;

    @media (min-width: 1140px) {
        padding: 0;
    }
`

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

const list = ['O mnie', 'Oferta', 'Portfolio', 'Blog', 'Kontakt']
const rowMap = Array.from({length: 20}, (v, k) => k+1)
const columnMap = Array.from({length: 10}, (v, k) => k+1)
const regex = /\s+/
class Header extends PureComponent {

    state = {
        clicked: false,
        animationEnd: false
    }

    tl = new TimelineLite({ paused: true, onReverseComplete: () => this.setState(state => ({ animationEnd: !state.animationEnd })) })
    bar1 = React.createRef()
    bar2 = React.createRef()
    menuContainer = React.createRef()
    overlayContainer = React.createRef()
    innerGridRefs = {}
    gridRefs = []

    handleOnClick = () => {
        this.setState(state => ( { clicked: !state.clicked } ))
    }

    handleHamburgerAnimation = (status, animation) => {
        status ? animation.play().timeScale(2) : animation.reverse().timeScale(2.5)
        console.log(animation.time())
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.clicked !== this.state.clicked) {
            this.handleHamburgerAnimation(this.state.clicked, this.tl)
        }
    }

    componentDidMount = async () => {
        const { bar1, bar2, tl, menuContainer, overlayContainer } = this

        await columnMap.forEach(column => rowMap.forEach(row => {
            this.innerGridRefs[`grid_item${column}-${row}`] = (ref) => this[`grid_item${column}-${row}`] = ref
            this.setState({ [`grid_item${column}-${row}`]: `grid_item${column}-${row}` })
        }))

        this.gridRefs = await Object.values(this.state)
        .filter(el => typeof el === 'string' && el.includes('grid_item'))
        .map(el => this[`${el}`]).sort(() => 0.5 - Math.random())


        tl.to(menuContainer.current, 0.01, { autoAlpha: 1, ease: Power2.easeInOut })
          .to(bar1.current, 0.25, { transform: 'rotate(45deg)', top: '32px', ease: Power2.easeInOut })
          .to(bar2.current, 0.25, { transform: 'rotate(-45deg)', bottom: '31px', ease: Power2.easeInOut }, '-=0.2')
          .staggerTo(this.gridRefs, 0.2, { opacity: 1, ease: Power2.easeInOut }, 0.003)
          .to(overlayContainer.current, 1, { opacity: 1, ease: Power2.easeInOut }, '-=0.6')
    }

    render() {

        const { clicked, animationEnd } = this.state
        const { handleOnClick, bar1, bar2, innerGridRefs, menuContainer, overlayContainer } = this

        const links = list.map((item, i) => 
            <ListItem key={shortid.generate()}>
                <Link location={this.props.location} delay={1000} to={`/${item.toLowerCase().replace(regex, '-')}`} animationEnd={animationEnd} clicked={handleOnClick}>
                    {item}
                </Link>
            </ListItem>
        )

        return (
            <HeaderContainer as='header'>
                <MobileNav clicked={handleOnClick} status={clicked} innerRefs={{ first: bar1, second: bar2 }} />
                <MenuContainer ref={menuContainer} style={{ visibility: 'hidden', opacity: 0 }}>
                    <ListContainer as='ul' style={{ opacity: `${clicked ? 1 : 0}` }}>
                        {links}
                    </ListContainer>
                    <Background {...innerGridRefs} overlay={overlayContainer} />
                </MenuContainer>
            </HeaderContainer>
        )
    }

}

export default Header