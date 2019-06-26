// DEPENDENCIES
import React from 'react'
import loadable from '@loadable/component'

// COMPONENTS
import Page from '../components/templates/Page'
const TrailHeading = loadable(() => import('../components/molecules/TrailHeading'))
const ContactForm = loadable(() => import('../components/organisms/ContactForm'))

const Kontakt = ({ style, minHeight }) => {

    return (
        <Page footer style={style} minHeight={minHeight}>
            <TrailHeading title='Kontakt.' />
            <ContactForm />
        </Page>
    )
}

export default Kontakt