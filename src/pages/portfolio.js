// DEPENDENCIES
import React from 'react'

// COMPONENTS
import Page from '../components/templates/Page'
import PortfolioDisplay from '../components/organisms/PortfolioDisplay'

const Portfolio = ({ style, minHeight }) => {

    const textProps = {
        className: `text`
    }

    return (
        <Page footer style={style} minHeight={minHeight}>
           <PortfolioDisplay />
        </Page>
    )
}

export default Portfolio