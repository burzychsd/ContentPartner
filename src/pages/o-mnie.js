import React from "react"

import Layout from "../components/template/layout"
import SEO from "../components/template/seo"

const Omnie = (props) => (
  <Layout location={props.location}>
    <SEO title="O mnie" keywords={[`O mnie`, `content`, `copywriting`]} />
  </Layout>
)

export default Omnie