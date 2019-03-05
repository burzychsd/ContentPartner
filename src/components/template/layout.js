import React, { Component, Fragment } from "react"
import styled, { css } from  'styled-components'
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { styles as GlobalStyles } from './../../design_system/global'
import { Flex } from './../../design_system/flexbox'
import { Normalize } from 'styled-normalize'
import Header from './../../components/organisms/Header'
import { TimelineLite, Power2 } from 'gsap/TweenMax'
import BulbAnimated from './../atoms/BulbAnimated'

const cubic = `cubic-bezier(0.86, 0, 0.07, 1)`

const styles = css`
  position: fixed;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  background: #F6F5F5;
  z-index: 1001;
  justify-content: center;
  align-items: center;
`

const transition = css`
  transition: all 0.4s ${cubic};
`

const SiteWrapper = styled(Flex)`
  position: relative;
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  z-index: 2;

  ${transition};
`

const FirstTransition = styled(Flex)`
    ${styles};
    width: 0%;
`

const SecondTransition = styled(Flex)`
  ${styles};
  width: 100%;
  padding: 1em;

  ${transition};
`

const ImageDiv = styled(Flex)`
  width: 100%;
  height: 60%;
  maxHeight: 411px;
  justify-content: center;
`

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
    const { transitionFirst, transitionSecond, bulbIcon, tl } = this
    const body = document.getElementsByTagName('body')

    tl.to(body, 0.6, { scaleX: 0.8, scaleY: 0.8, ease: Power2.easeInOut })
      .to(transitionFirst.current, 0.6, { width: '100%', ease: Power2.easeIn })
      .to(body, 0.01, { scaleX: 1, scaleY: 1, ease: Power2.easeInOut })

    this.setState({ endTime: tl.duration() * 1000 })

    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions)

    setTimeout(() => bulbIcon.style.opacity = 1, 50)

    setTimeout(() => {
      transitionSecond.current.style.opacity = 0
    }, 1700)

    setTimeout(async () => {
      await this.setState({ isMounted: true })
      await setTimeout(() => transitionSecond.current.style.display = 'none', 100)
    }, 2100)
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.transition !== this.state.transition) {
      this.tl.play()
    }
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWindowDimensions)
    this.setState({ transition: false }) 
  }

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
          <SiteWrapper style={{ minHeight: `${this.state.height}px` }}>
            <Header location={this.props.location} endTime={this.state.endTime} handleTransition={this.handleTransition} />
            <main style={{ flex: 1, paddingTop: 130, position: 'relative' }}>{this.props.children}</main>
            <footer></footer>
            <FirstTransition ref={this.transitionFirst} style={{ display: `${this.state.transition ? 'inherit' : 'none'}` }}></FirstTransition>
            <SecondTransition ref={this.transitionSecond}>
                <ImageDiv>
                  <BulbAnimated innerRef={ref => this.bulbIcon = ref} />
                </ImageDiv>
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
