import React from "react"

import Layout from "../components/template/layout"
import SEO from "../components/template/seo"

const Portfolio = (props) => (
  <Layout location={props.location}>
    <SEO title="Portfolio" keywords={[`Portfolio`, `content`, `copywriting`]} />
  </Layout>
)

export default Portfolio