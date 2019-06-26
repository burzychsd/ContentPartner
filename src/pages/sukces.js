// DEPENDENCIES
import React from 'react'

// COMPONENTS
import Page from '../components/templates/Page'
import TrailHeading from '../components/molecules/TrailHeading'
import SuccessGraphic from '../images/svg/success.svg'

const SuccessPage = ({ style, minHeight }) => {

  return (
    <Page footer style={style} minHeight={minHeight}>
      <SuccessGraphic preserveAspectRatio='xMidYMid meet' style={{ width: '60%', maxWidth: 280, marginBottom: '1rem' }} />
      <TrailHeading title='Dziękuję za kontakt.' />
    </Page>
  )
}

export default SuccessPage