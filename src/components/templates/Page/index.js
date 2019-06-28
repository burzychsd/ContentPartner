// DEPENDENCIES
import React, { memo } from 'react'
import { animated } from 'react-spring'
import PropTypes from 'prop-types'
import loadable from '@loadable/component'

// COMPONENTS
import Flex from './../../atoms/Flex'
const Footer = loadable(() => import('./../../organisms/Footer'))

// ANIMATION
import { fadeTransition } from './../../../animations/fadeTransition'

const AnimatedFlex = animated(Flex)

const Page = props => {
    const { footer, style, children, minHeight, status } = props

    const transition = fadeTransition(status)

    return transition.map(({ item, key, props }) => 

        item &&
            <AnimatedFlex
            key={key}
            reset
            style={{ overflowX: 'hidden', ...props, ...style }}>
            <Flex
            className='section_container'
            reset css={tw`flex-col w-full items-center`}
            style={{ minHeight, opacity: item ? 1 : 0 }}>
                {children}
            </Flex>
                {/* {footer && status && <Footer />} */}
            </AnimatedFlex>
    )
}

Page.propTypes = {
    footer: PropTypes.bool,
    style: PropTypes.object.isRequired,
    children: PropTypes.node,
    status: PropTypes.bool,
    noTransition: PropTypes.bool
}

export default memo(Page)