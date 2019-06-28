// DEPENDENCIES
import React, { useRef, memo } from 'react'
import PropTypes from 'prop-types'
import { useSpring, useChain, animated } from 'react-spring'

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

    const [firstBarStyles, setFirstBar] = useSpring(() => ({ opacity: 1, ref: firstBar }))
    setFirstBar({ opacity: toggle ? 0 : 1 })

    const [secondBarStyles, setSecondBar] = useSpring(() => ({ opacity: 1, ref: secondBar }))
    setSecondBar({ opacity: toggle ? 0 : 1 })

    const [firstHiddenBarStyles, setFirstHiddenBar] = useSpring(() => ({ from: { opacity: 0, transform: 'rotate(0deg)' }, ref: firstHiddenBar }))
    setFirstHiddenBar({ opacity: toggle ? 1 : 0, transform: toggle ? 'rotate(-45deg)' : 'rotate(0deg)' })

    const [secondHiddenBarStyles, setSecondHiddenBar] = useSpring(() => ({ from: { opacity: 0, transform: 'rotate(0deg)' }, ref: secondHiddenBar }))
    setSecondHiddenBar({ opacity: toggle ? 1 : 0, transform: toggle ? 'rotate(45deg)' : 'rotate(0deg)' })

    useChain(toggle ? [firstBar, secondBar, firstHiddenBar, secondHiddenBar] :
                      [secondHiddenBar, firstHiddenBar, secondBar, firstBar], [0.1, 0.2, 0.1, 0.2])

    return (
        <Flex
        {...containerProps}
        css={tw`relative flex-col justify-around cursor-pointer`}
        onClick={setToggle}>
            <AnimatedFlex {...barProps} style={firstBarStyles} css={barCss}></AnimatedFlex>
            <AnimatedFlex {...barProps} style={secondBarStyles} css={barCss}></AnimatedFlex>
            <AnimatedFlex {...barHiddenProps(firstHiddenBarStyles)} css={barCssHidden}></AnimatedFlex>
            <AnimatedFlex {...barHiddenProps(secondHiddenBarStyles)} css={barCssHidden}></AnimatedFlex>
        </Flex>
    )
}

Hamburger.propTypes = {
    toggle: PropTypes.bool.isRequired,
    setToggle: PropTypes.func.isRequired
}

export default memo(Hamburger)