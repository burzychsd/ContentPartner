// DEPENDENCIES
import React, { Fragment } from 'react'

// COMPONENTS
import SEO from '../components/templates/SEO'

const IndexPage = () => (
    <Fragment>
        <SEO title="Home" keywords={[`website`, `personal`, `blog`]} />
        <h1 css={tw`m-0`}>Home</h1>
    </Fragment>
)

export default IndexPage
