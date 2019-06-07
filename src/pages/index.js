// DEPENDENCIES
import React, { Fragment } from 'react'
import loadable from '@loadable/component'

// COMPONENTS
import SEO from '../components/templates/SEO'

// LAZY LOAD
const HomeContent = loadable(() => import('../components/organisms/HomeContent'))

const IndexPage = () => (
    <Fragment>
        <SEO title="Home" keywords={[`website`, `personal`, `blog`]} />
        <HomeContent />
    </Fragment>
)

export default IndexPage
