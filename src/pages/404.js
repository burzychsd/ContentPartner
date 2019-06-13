// DEPENDENCIES
import React from 'react'

// COMPONENTS
import Page from '../components/templates/Page'
import TrailHeading from '../components/molecules/TrailHeading'
import Text from '../components/atoms/Text'

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
