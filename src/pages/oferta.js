// DEPENDENCIES
import React from 'react'
import loadable from '@loadable/component'

// COMPONENTS
import Page from '../components/templates/Page'
const ServicesDisplay = loadable(() => import('../components/organisms/ServicesDisplay'))

const Oferta = ({ style, minHeight }) => {

    return (
        <Page footer style={style} minHeight={minHeight}>
            <ServicesDisplay />
        </Page>
    )
}

export default Oferta