// DEPENDENCIES
import React, { memo } from 'react'
import loadable from '@loadable/component'

// COMPONENTS
import SEO from './../components/templates/SEO'
const TrailHeading = loadable(() => import('../components/molecules/TrailHeading'))
const SuccessGraphic = loadable(() => import('../images/svg/success.svg'))

const SuccessPage = () => {

  return (
    <>
      <SEO title='Dziękuję' description='Gratulacje, udało Ci się wysłać wiadomość.' />
      <SuccessGraphic preserveAspectRatio='xMidYMid meet' style={{ width: '60%', maxWidth: 280, marginBottom: '1rem' }} />
      <TrailHeading title='Dziękuję za kontakt.' />
    </>
  )
}

export default memo(SuccessPage)