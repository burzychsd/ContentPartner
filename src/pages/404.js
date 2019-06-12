// DEPENDENCIES
import React from 'react'
import { animated } from 'react-spring/renderprops'

// COMPONENTS
import Flex from '../components/atoms/Flex'
import TrailHeading from '../components/molecules/TrailHeading'
import Text from '../components/atoms/Text'

const AnimatedFlex = animated(Flex)

const NotFoundPage = ({ style }) => {

  const sectionProps = {
    as: `section`,
    reset: true,
    style
  }

  const textProps = {
    className: `text`
  }

  return (
    <AnimatedFlex {...sectionProps}>
      <TrailHeading title='Not Found.' />
      <Text {...textProps} css={tw`font-light`}>You just hit a route that doesn&#39;t exist... the sadness.</Text>
    </AnimatedFlex>
  )
}

export default NotFoundPage
