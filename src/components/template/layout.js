import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { styles as GlobalStyles } from './../../design_system/global'
import { Normalize } from 'styled-normalize'
import Header from './../../components/organisms/Header'


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
        <Header />
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
