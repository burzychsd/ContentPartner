// DEPENDENCIES
import React from 'react'
import loadable from '@loadable/component'

// COMPONENTS
import SEO from './../components/templates/SEO'
const TrailHeading = loadable(() => import('../components/molecules/TrailHeading'))
const ContactForm = loadable(() => import('../components/organisms/ContactForm'))

const Kontakt = () => {

    return (
        <>
            <SEO title='Kontakt' keywords={[]} />
            <TrailHeading title='Kontakt.' />
            <ContactForm />
        </>
    )
}

export default Kontakt