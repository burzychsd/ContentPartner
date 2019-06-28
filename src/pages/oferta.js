// DEPENDENCIES
import React from 'react'

// COMPONENTS
import Page from '../components/templates/Page'
import ServicesDisplay from '../components/organisms/ServicesDisplay'

const Oferta = ({ style, minHeight, status }) => {

    return (
        <Page footer style={style} minHeight={minHeight} status={status}>
            <ServicesDisplay />
        </Page>
    )
}

export default Oferta