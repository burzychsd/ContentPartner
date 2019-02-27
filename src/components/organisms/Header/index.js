import React, { Component } from 'react'
import styled from 'styled-components'
import { Flex } from './../../../design_system/flexbox'
import MobileNav from './../../molecules/MobileNav'
import { TimelineLite, Power2 } from 'gsap/TweenMax'

const Container = styled(Flex)`
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

class Header extends Component {

    state = {
        clicked: false
    }

    tl = new TimelineLite({ paused: true })
    bar1 = React.createRef()
    bar2 = React.createRef()

    handleOnClick = async () => {
        await this.setState(state => ( { clicked: !state.clicked } ))
        await this.handleHamburgerAnimation(this.state.clicked, this.hamburgerAnimation(this.tl, this.bar1.current, this.bar2.current))
    }

    handleHamburgerAnimation = (status, animation) => {

        status ? animation.play().timeScale(1) : animation.reverse().timeScale(2)
    }

    hamburgerAnimation = (tl, bar1, bar2) => tl.to(bar1, 0.3, { transform: 'rotate(45deg)', top: '32px', ease: Power2.easeInOut })
                                               .to(bar2, 0.3, { transform: 'rotate(-45deg)', bottom: '31px', ease: Power2.easeInOut }, '-=0.2')

    render() {

        const { clicked } = this.state
        const { handleOnClick, bar1, bar2 } = this

        return (
            <Container as='header'>
                <MobileNav clicked={handleOnClick} status={clicked} innerRefs={{ first: bar1, second: bar2 }} />
            </Container>
        )
    }

}

export default Header