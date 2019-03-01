import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { styles as GlobalStyles } from './../../design_system/global'
import { Normalize } from 'styled-normalize'
import Header from './../../components/organisms/Header'


const Layout = (props) => (
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
        <Header location={props.location} />
        <main style={{ paddingTop: 130, position: 'relative', zIndex: 998 }}>{props.children}</main>
        <footer></footer>
      </Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
