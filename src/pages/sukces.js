// DEPENDENCIES
import React from 'react'

// COMPONENTS
import Page from '../components/templates/Page'
import TrailHeading from '../components/molecules/TrailHeading'

const SuccessPage = ({ style, minHeight }) => {

  return (
    <Page footer style={style} minHeight={minHeight}>
      <TrailHeading title='Dziękuję za kontakt.' />
    </Page>
  )
}

export default SuccessPage