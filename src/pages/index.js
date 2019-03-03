import React from "react"

import Layout from "../components/template/layout"
import SEO from "../components/template/seo"

const IndexPage = (props) => (
  <Layout location={props.location}>
    <SEO title="Home" keywords={[`Home`, `content`, `copywriting`]} />
    <h1>Heello</h1>
  </Layout>
)

export default IndexPage
