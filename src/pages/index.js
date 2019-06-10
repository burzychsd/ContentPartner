// DEPENDENCIES
import React from 'react'
import { animated } from 'react-spring/renderprops'

// COMPONENTS
import Flex from '../components/atoms/Flex'
import HomeContent from '../components/organisms/HomeContent'

const AnimatedFlex = animated(Flex)

const IndexPage = ({ style }) => {

    const sectionProps = {
        as: `section`,
        reset: true,
        style
    }

    return (
        <AnimatedFlex {...sectionProps}>
            <HomeContent />
        </AnimatedFlex>
    )
}

export default IndexPage
