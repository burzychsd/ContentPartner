// DEPENDENCIES
import React, { Component, Fragment } from "react"
import { TimelineLite, Power2 } from 'gsap/TweenMax'
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Normalize } from 'styled-normalize'

// COMPONENTS
import Header from '../../organisms/Header'
import BulbAnimated from '../../atoms/BulbAnimated'
import { SiteWrapper, FirstTransition, SecondTransition, ImageDiv } from './styled'
import SocialMedia from '../../atoms/SocialMedia'
import AnimatedHeadline from '../../atoms/AnimatedHeadline'

// STYLED_SYSTEM
import { styles as GlobalStyles } from '../../../design_system/global'

class Layout extends Component {

  state = {
    transition: false,
    isMounted: false,
    width: 0,
    height: 0
  }

  initialTween
  tl = new TimelineLite({ paused: true })
  transitionFirst = React.createRef()
  transitionSecond = React.createRef()

  componentDidMount = () => {
    const { transitionSecond, bulbIcon, tl } = this
    const body = document.getElementsByTagName('body')

    this.animationOnExit(body)
    this.updateWindowDimensions();
    
    window.addEventListener('resize', this.updateWindowDimensions)

    setTimeout(() => bulbIcon.style.opacity = 1, 0.50)

    // setTimeout(() => {
    //   transitionSecond.current.style.opacity = 0
    // }, 1700)

    // setTimeout(async () => {
    //   await this.setState({ isMounted: true })
    //   await setTimeout(() => transitionSecond.current.style.display = 'none', 100)
    // }, 2100)

    // this.setState({ endTime: tl.duration() * 1000 })
  }

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (prevState.transition !== this.state.transition) {
  //     this.tl.play()
  //   }
  // }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWindowDimensions)
    this.setState({ transition: false }) 
  }

  animationOnExit = (body) => this.tl.to(body, 0.5, { scaleX: 0.8, scaleY: 0.8, ease: Power2.easeInOut })
                                 .to(this.transitionFirst.current, 0.45, { width: '100%', ease: Power2.easeIn })
                                 .to(body, 0.01, { scaleX: 1, scaleY: 1, ease: Power2.easeInOut })

  handleTransition = () => this.setState({ transition: true })

  updateWindowDimensions = () => this.setState({ width: window.innerWidth, height: window.innerHeight })

  render() {
    return (
      <StaticQuery
      query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
      `}
      render={data => (
        <Fragment>
          <GlobalStyles />
          <Normalize />
          <SiteWrapper style={{ height: `${this.state.height}px` }}>
            <Header location={this.props.location} endTime={this.state.endTime} handleTransition={this.handleTransition} />
            <main style={{ flex: 1, marginTop: 115, position: 'relative' }}>{this.props.children}</main>
            <footer></footer>
            <FirstTransition ref={this.transitionFirst} style={{ display: `${this.state.transition ? 'inherit' : 'none'}`, minHeight: `${this.state.height}px` }}></FirstTransition>
            <SecondTransition ref={this.transitionSecond} style={{ minHeight: `${this.state.height}px`, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <ImageDiv>
                  <BulbAnimated innerRef={ref => this.bulbIcon = ref} />
                </ImageDiv>
                <AnimatedHeadline />
                <SocialMedia />
            </SecondTransition>
          </SiteWrapper>
        </Fragment>
      )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
