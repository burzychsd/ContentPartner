// DEPENDENCIES
import React from 'react'
import loadable from '@loadable/component'
import pMinDelay from 'p-min-delay'

// COMPONENTS
import SEO from './../components/templates/SEO'
const TrailHeading = loadable(() => pMinDelay(import('../components/molecules/TrailHeading'), 600))
const ContactForm = loadable(() => import('../components/organisms/ContactForm'))

const Kontakt = () => {

    return (
        <>
            <SEO title='Kontakt' description='Napisz lub zadzwoń, jeśli chcesz nawiązać współpracę.' />
            <TrailHeading title='Kontakt' delay={true} />
            <ContactForm />
        </>
    )
}

export default Kontakt
