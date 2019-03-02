import React from "react"

import Layout from "../components/template/layout"
import SEO from "../components/template/seo"

const Blog = (props) => (
  <Layout location={props.location}>
    <SEO title="Blog" keywords={[`Blog`, `content`, `copywriting`]} />
  </Layout>
)

export default Blog