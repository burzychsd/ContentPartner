// DEPENDENCIES
import React from 'react'

// COMPONENTS
import SEO from './../components/templates/SEO'
import ServicesDisplay from '../components/organisms/ServicesDisplay'

const Oferta = () => {

    return (
        <>
            <SEO title='Oferta' desciption='Lista usług, które mogę dla Ciebie wykonać.' />
            <ServicesDisplay />
        </>
    )
}

export default Oferta