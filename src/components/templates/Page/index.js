// DEPENDENCIES
import React from 'react'
import { animated } from 'react-spring/renderprops'
import PropTypes from 'prop-types'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Footer from './../../organisms/Footer'

const AnimatedFlex = animated(Flex)

const Page = props => {
    const { footer, style , children } = props

    const sectionProps = {
        as: `section`,
        reset: true,
        style
    }
    
    return (
        <AnimatedFlex {...sectionProps}>
            <Flex
            className='section_container'
            reset css={tw`flex-col w-full items-center`}
            style={{ minHeight: `calc(100vh - ${style.paddingTop})` }}>
                {children}
            </Flex>
            {footer && <Footer />}
        </AnimatedFlex>
    )
}

Page.propTypes = {
    footer: PropTypes.bool,
    style: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
}

export default Page