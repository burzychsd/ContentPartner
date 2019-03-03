import React, { Component, Fragment } from "react"
import styled from  'styled-components'
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { styles as GlobalStyles } from './../../design_system/global'
import { Flex } from './../../design_system/flexbox'
import { Normalize } from 'styled-normalize'
import Header from './../../components/organisms/Header'
import PageTransition from './../organisms/PageTransition'

const SiteWrapper = styled(Flex)`
  max-width: 1140px;
  margin: 0 auto;  
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  opacity: 0;
  transition: all 0.6s cubic-bezier(0.86, 0, 0.07, 1);
`

class Layout extends Component {

  state = {
    transition: false,
    isMounted: false
  }

  handleTransition = () => this.setState({ transition: true })

  componentDidMount = () => setTimeout(() => this.setState({ isMounted: true }), 600)

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
          <SiteWrapper style={{ opacity: `${this.state.isMounted ? 1 : 0}` }}>
            <Header location={this.props.location} transitionStatus={this.state.transition} handleTransition={this.handleTransition} />
            <main style={{ flex: 1, paddingTop: 130, position: 'relative' }}>{this.props.children}</main>
            <footer></footer>
          </SiteWrapper>
          {!this.state.isMounted && <PageTransition status='onExit'></PageTransition>}
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
