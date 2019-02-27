import React from "react"

import Layout from "../components/template/layout"
import SEO from "../components/template/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Home`, `content`, `copywriting`]} />
    <h1 style={{ margin: '1em auto', textAlign: 'center' }}>Hi people</h1>
  </Layout>
)

export default IndexPage
