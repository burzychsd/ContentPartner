import React from "react"

import Layout from "../components/template/Layout"
import SEO from "../components/template/seo"

const Kontakt = (props) => (
  <Layout location={props.location}>
    <SEO title="Kontakt" keywords={[`Kontakt`, `content`, `copywriting`]} />
    <h1 style={{ textAlign: 'center' }}>Wanna know more?</h1>
  </Layout>
)

export default Kontakt