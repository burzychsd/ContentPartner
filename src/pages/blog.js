import React from "react"

import Layout from "../components/template/layout"
import SEO from "../components/template/seo"

const Blog = (props) => (
  <Layout location={props.location}>
    <SEO title="Blog" keywords={[`Blog`, `content`, `copywriting`]} />
    <h1 style={{ textAlign: 'center' }}>I'll be blogging in the near future...</h1>
  </Layout>
)

export default Blog