// DEPENDENCIES
import React from 'react'
import loadable from '@loadable/component'

// COMPONENTS
import Page from '../components/templates/Page'
const TrailHeading = loadable(() => import('../components/molecules/TrailHeading'))
const SuccessGraphic = loadable(() => import('../images/svg/success.svg'))

const SuccessPage = ({ style, minHeight, status }) => {

  return (
    <Page footer style={style} minHeight={minHeight} status={status}>
      <SuccessGraphic preserveAspectRatio='xMidYMid meet' style={{ width: '60%', maxWidth: 280, marginBottom: '1rem' }} />
      <TrailHeading title='Dziękuję za kontakt.' />
    </Page>
  )
}

export default SuccessPage