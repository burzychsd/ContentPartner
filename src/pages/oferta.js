// DEPENDENCIES
import React from 'react'
import loadable from '@loadable/component'

// COMPONENTS
import SEO from './../components/templates/SEO'
const ServicesDisplay = loadable(() => import('../components/organisms/ServicesDisplay'))

const Oferta = () => {

    return (
        <>
            <SEO title='Oferta' desciption='Lista usług, które mogę dla Ciebie wykonać.' />
            <ServicesDisplay />
        </>
    )
}

export default Oferta