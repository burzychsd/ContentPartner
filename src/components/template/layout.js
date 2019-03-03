import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { styles as GlobalStyles } from './../../design_system/global'
import { Normalize } from 'styled-normalize'
import Header from './../../components/organisms/Header'
import PageTransition from './../organisms/PageTransition'

class Layout extends Component {

  state = {
    transition: false,
    isMounted: false
  }

  handleTransition = () => this.setState({ transition: true })

  componentDidMount = () => setTimeout(() => this.setState({ isMounted: true }), 1400)

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
          <div id='site_wrapper'>
            <Header location={this.props.location} transitionStatus={this.state.transition} handleTransition={this.handleTransition} />
            <main style={{ flex: 1, paddingTop: 130, position: 'relative' }}>{this.props.children}</main>
            <footer></footer>
          </div>
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
