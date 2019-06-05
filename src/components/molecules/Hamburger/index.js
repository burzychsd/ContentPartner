// DEPENDENCIES
import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useSpring, useChain, animated } from 'react-spring'

// COMPONENTS
import Flex from './../../atoms/Flex'

const AnimatedFlex = animated(Flex)

// STYLES
import './Hamburger.css'

const Hamburger = (props) => {

    const { toggle, setToggle, style } = props

    const firstBar = useRef()
    const secondBar = useRef()
    const firstHiddenBar = useRef()
    const secondHiddenBar = useRef()
    const barSpring = (css, ref) => useSpring({ ...css, ref: ref })

    const firstBarProps = barSpring({ opacity: toggle ? 0 : 1 }, firstBar)
    const secondBarProps = barSpring({ opacity: toggle ? 0 : 1 }, secondBar)
    const firstHiddenProps = barSpring({ opacity: toggle ? 1 : 0, transform: `rotate(${toggle ? '-45deg' : '0deg'})` }, firstHiddenBar)
    const secondHiddenProps = barSpring({ opacity: toggle ? 1 : 0, transform: `rotate(${toggle ? '45deg' : '0deg'})` }, secondHiddenBar)

    useChain(toggle ? [firstBar, secondBar, firstHiddenBar, secondHiddenBar] :
                      [secondHiddenBar, firstHiddenBar, secondBar, firstBar], [0.1, 0.2, 0.1, 0.2])

    const containerProps = {
        reset: true,
        className: `hamburger_container`,
        onClick: () => setToggle(toggle => !toggle),
        style
    }

    const barProps = {
        reset: true,
        className: `hamburger_bar`,
    }

    const barHiddenProps = {
        reset: true,
        style: { transform: 'translateY(-50%)', top: '50%', left: 0, right: 0, margin: '0 auto' }
    }

    const barCss = { ...tw`bg-dark_puce` }
    const barCssHidden = { ...tw`absolute w-full h-px bg-dark_puce` }

    return (
        <Flex {...containerProps} css={tw`relative flex-col justify-around cursor-pointer`}>
            <AnimatedFlex {...barProps} style={firstBarProps} css={barCss}></AnimatedFlex>
            <AnimatedFlex {...barProps} style={secondBarProps} css={barCss}></AnimatedFlex>
            <AnimatedFlex {...barHiddenProps} style={firstHiddenProps} css={barCssHidden}></AnimatedFlex>
            <AnimatedFlex {...barHiddenProps} style={secondHiddenProps} css={barCssHidden}></AnimatedFlex>
        </Flex>
    )
}

Hamburger.propTypes = {
    toggle: PropTypes.bool.isRequired,
    setToggle: PropTypes.func.isRequired,
    style: PropTypes.object.isRequired
}

export default Hamburger