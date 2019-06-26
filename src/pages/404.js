// DEPENDENCIES
import React from 'react'
import loadable from '@loadable/component'

// COMPONENTS
import Page from '../components/templates/Page'
const TrailHeading = loadable(() => import('../components/molecules/TrailHeading'))
const Text = loadable(() => import('../components/atoms/Text'))

const NotFoundPage = ({ style, minHeight }) => {

  const textProps = {
    className: `text`
  }

  return (
    <Page footer style={style} minHeight={minHeight}>
      <TrailHeading title='Not Found.' />
      <Text {...textProps} css={tw`font-light`}>You just hit a route that doesn&#39;t exist... the sadness.</Text>
    </Page>
  )
}

export default NotFoundPage
