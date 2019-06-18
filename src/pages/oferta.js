// DEPENDENCIES
import React from 'react'

// COMPONENTS
import Page from '../components/templates/Page'
import ServicesDisplay from '../components/organisms/ServicesDisplay'

const Oferta = ({ style, minHeight }) => {

    return (
        <Page footer style={style} minHeight={minHeight}>
            <ServicesDisplay />
        </Page>
    )
}

export default Oferta