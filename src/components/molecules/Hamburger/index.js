// DEPENDENCIES
import React, { useRef, memo } from 'react'
import PropTypes from 'prop-types'
import { useChain, animated } from 'react-spring'
import loadable from '@loadable/component'

// COMPONENTS
import Flex from './../../atoms/Flex'

const AnimatedFlex = animated(Flex)

// ANIMATION
import { hamburgerAnimation } from './animation'

// STYLES
import './Hamburger.css'

// PROPS
import { containerProps, barProps, barHiddenProps, barCss, barCssHidden } from './props'

const Hamburger = (props) => {

    const { toggle, setToggle } = props

    const firstBar = useRef()
    const secondBar = useRef()
    const firstHiddenBar = useRef()
    const secondHiddenBar = useRef()

    const animate = hamburgerAnimation([firstBar, secondBar, firstHiddenBar, secondHiddenBar], toggle)

    useChain(toggle ? [firstBar, secondBar, firstHiddenBar, secondHiddenBar] :
                      [secondHiddenBar, firstHiddenBar, secondBar, firstBar], [0.1, 0.2, 0.1, 0.2])

    return (
        <Flex
        {...containerProps}
        css={tw`relative flex-col justify-around cursor-pointer`}
        onClick={e => setToggle(toggle => !toggle)}>
            <AnimatedFlex {...barProps} style={animate.style1} css={barCss}></AnimatedFlex>
            <AnimatedFlex {...barProps} style={animate.style2} css={barCss}></AnimatedFlex>
            <AnimatedFlex {...barHiddenProps} style={animate.style3} css={barCssHidden}></AnimatedFlex>
            <AnimatedFlex {...barHiddenProps} style={animate.style4} css={barCssHidden}></AnimatedFlex>
        </Flex>
    )
}

Hamburger.propTypes = {
    toggle: PropTypes.bool.isRequired,
    setToggle: PropTypes.func.isRequired
}

export default memo(Hamburger)