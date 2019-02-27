import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { styles as GlobalStyles } from './../../design_system/global'
import { Normalize } from 'styled-normalize'


const Layout = ({ children }) => (
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
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
