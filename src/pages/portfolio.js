import React from "react"

import Layout from "../components/template/Layout"
import SEO from "../components/template/seo"

const Portfolio = (props) => (
  <Layout location={props.location}>
    <SEO title="Portfolio" keywords={[`Portfolio`, `content`, `copywriting`]} />
    <h1 style={{ textAlign: 'center' }}>But I'm not showing to U yet.</h1>
  </Layout>
)

export default Portfolio