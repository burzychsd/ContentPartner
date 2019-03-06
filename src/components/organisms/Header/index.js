// DEPENDENCIES
import React, { PureComponent, Fragment } from 'react'
import { TimelineLite, Power2 } from 'gsap/TweenMax'

// COMPONENTS
import Navigation from './../../molecules/Navigation'
import { HeaderContainer } from './styled'

const rowMap = Array.from({length: 20}, (v, k) => k+1)
const columnMap = Array.from({length: 10}, (v, k) => k+1)

class Header extends PureComponent {

    state = {
        clicked: false
    }

    tl = new TimelineLite({ paused: true })
    bar1 = React.createRef()
    bar2 = React.createRef()
    menuContainer = React.createRef()
    overlayContainer = React.createRef()
    innerGridRefs = {}
    gridRefs = []

    handleOnClick = (e, link) => {
        this.setState(state => ( { clicked: !state.clicked } ))
        if ( link === 'link') { this.props.handleTransition() }
    }

    handleHamburgerAnimation = (status, animation) => {
        status ? animation.play().timeScale(2) : animation.reverse().timeScale(2.5)
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.clicked !== this.state.clicked) {
            this.handleHamburgerAnimation(this.state.clicked, this.tl)
        }
    }

    componentDidMount = async () => {

        await columnMap.forEach(column => rowMap.forEach(row => {
            this.innerGridRefs[`grid_item${column}-${row}`] = (ref) => this[`grid_item${column}-${row}`] = ref
            this.setState({ [`grid_item${column}-${row}`]: `grid_item${column}-${row}` })
        }))

        this.gridRefs = await Object.values(this.state)
        .filter(el => typeof el === 'string' && el.includes('grid_item'))
        .map(el => this[`${el}`]).sort(() => 0.5 - Math.random())

        this.navAnimation()
    }

    navAnimation = () => this.tl.to(this.menuContainer.current, 0.01, { autoAlpha: 1, ease: Power2.easeInOut })
                             .to(this.bar1.current, 0.25, { transform: 'rotate(45deg)', top: '32px', ease: Power2.easeInOut })
                             .to(this.bar2.current, 0.25, { transform: 'rotate(-45deg)', bottom: '31px', ease: Power2.easeInOut }, '-=0.2')
                             .staggerTo(this.gridRefs, 0.2, { opacity: 1, ease: Power2.easeInOut }, 0.003)
                             .to(this.overlayContainer.current, 1, { opacity: 1, ease: Power2.easeInOut }, '-=0.6')

    render() {

        const { clicked } = this.state
        const { handleOnClick, bar1, bar2, innerGridRefs, menuContainer, overlayContainer } = this
        const { location, handleTransition, endTime } = this.props

        return (
            <Fragment>
                <HeaderContainer as='header'>
                    <Navigation clicked={handleOnClick} status={clicked} 
                    endTime={endTime}
                    innerRefs={{ first: bar1, second: bar2 }} menuContainer={menuContainer} 
                    innerGridRefs={innerGridRefs} overlay={overlayContainer}
                    location={location} handleTransition={handleTransition} />
                </HeaderContainer>
            </Fragment>
        )
    }

}

export default Header