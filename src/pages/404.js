// DEPENDENCIES
import React from 'react'
import loadable from '@loadable/component'

// COMPONENTS
import SEO from './../components/templates/SEO'
const TrailHeading = loadable(() => import('../components/molecules/TrailHeading'))
const Text = loadable(() => import('../components/atoms/Text'))

const NotFoundPage = () => {

  const textProps = {
    className: `text`
  }

  return (
    <>
      <SEO title='404' />
      <TrailHeading title='Not Found.' />
      <Text {...textProps} css={tw`font-light`}>You just hit a route that doesn&#39;t exist... the sadness.</Text>
    </>
  )
}

export default NotFoundPage
