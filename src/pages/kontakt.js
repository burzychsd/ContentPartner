// DEPENDENCIES
import React from 'react'

// COMPONENTS
import SEO from './../components/templates/SEO'
import TrailHeading from '../components/molecules/TrailHeading'
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