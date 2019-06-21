// DEPENDENCIES
import React, { Fragment } from 'react'

// COMPONENTS
import Page from '../components/templates/Page'
import TrailHeading from '../components/molecules/TrailHeading'
import Text from '../components/atoms/Text'
import ContactForm from '../components/organisms/ContactForm'

const Kontakt = ({ style, minHeight }) => {

    const textProps = {
        className: `text`
    }

    return (
        <Page footer style={style} minHeight={minHeight}>
            <TrailHeading title='Kontakt.' />
            <ContactForm />
        </Page>
    )
}

export default Kontakt