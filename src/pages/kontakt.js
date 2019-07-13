// DEPENDENCIES
import React from 'react'
import loadable from '@loadable/component'

// COMPONENTS
import SEO from './../components/templates/SEO'
const TrailHeading = loadable(() => import('../components/molecules/TrailHeading'))
import ContactForm from '../components/organisms/ContactForm'

const Kontakt = () => {

    return (
        <>
            <SEO title='Kontakt' description='Napisz lub zadzwoń, jeśli chcesz nawiązać współpracę.' />
            <TrailHeading title='Kontakt' />
            <ContactForm />
        </>
    )
}

export default Kontakt
