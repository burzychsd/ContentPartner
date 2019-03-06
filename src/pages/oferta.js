import React from "react"

import Layout from "../components/template/Layout"
import SEO from "../components/template/seo"

const Oferta = (props) => (
  <Layout location={props.location}>
    <SEO title="Oferta" keywords={[`Oferta`, `content`, `copywriting`]} />
    <h1 style={{ textAlign: 'center' }}>I create stuff.</h1>
  </Layout>
)

export default Oferta