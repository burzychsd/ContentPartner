// DEPENDENCIES
import React from 'react'
import loadable from '@loadable/component'

// COMPONENTS
import SEO from './../components/templates/SEO'
import { H1 as Heading } from './../components/atoms/Heading'
const ContactForm = loadable(() => import('../components/organisms/ContactForm'))

const Kontakt = () => {

    return (
        <>
            <SEO title='Kontakt' description='Napisz lub zadzwoń, jeśli chcesz nawiązać współpracę.' />
            <Heading>Kontakt</Heading>
            <ContactForm />
        </>
    )
}

export default Kontakt
