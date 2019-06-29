// DEPENDENCIES
import React from 'react'
import loadable from '@loadable/component'

// COMPONENTS
import SEO from './../components/templates/SEO'
const PortfolioDisplay = loadable(() => import('../components/organisms/PortfolioDisplay'))

const Portfolio = () => {

    return (
        <>
            <SEO title='Portfolio' keywords={[]} />
           <PortfolioDisplay />
        </>
    )
}

export default Portfolio