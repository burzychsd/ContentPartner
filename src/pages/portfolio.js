// DEPENDENCIES
import React from 'react'
import loadable from '@loadable/component'

// COMPONENTS
import Page from '../components/templates/Page'
const PortfolioDisplay = loadable(() => import('../components/organisms/PortfolioDisplay'))

const Portfolio = ({ style, minHeight, status }) => {

    return (
        <Page footer style={style} minHeight={minHeight} status={status}>
           <PortfolioDisplay />
        </Page>
    )
}

export default Portfolio