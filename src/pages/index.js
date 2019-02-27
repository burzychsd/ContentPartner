import React from "react"

import Layout from "../components/template/layout"
import Link from './../components/atoms/TransitionLink'
import Logo from './../components/atoms/Logo'
import Hamburger from './../components/atoms/Hamburger'
import SEO from "../components/template/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Home`, `content`, `copywriting`]} />
    <Link to='/'>O mnie</Link>
    <Logo />
    <Hamburger />
  </Layout>
)

export default IndexPage
