import React from "react"

import Layout from "../components/template/layout"
import SEO from "../components/template/seo"

const Oferta = (props) => (
  <Layout location={props.location}>
    <SEO title="Oferta" keywords={[`Oferta`, `content`, `copywriting`]} />
  </Layout>
)

export default Oferta