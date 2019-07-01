// DEPENDENCIES
import React, { memo, useRef } from 'react'
import PropTypes from 'prop-types'
import { RemoveScrollBar, zeroRightClassName } from 'react-remove-scroll-bar'
import { useSpring, useChain, animated } from 'react-spring'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Text from './../../atoms/Text'

// STYLES
import './Modal.css'

const AnimatedFlex = animated(Flex)

const Modal = props => {

    const { isActive, handleClick, children, button } = props

    const config = { mass: 1, tension: 120, friction: 20 }
    const setStyles = { opacity: isActive ? 1 : 0 }
    const spring = { from: { opacity: 0 } }

    const [containerStyle, setContainerStyle] = useSpring(() => ({...spring}))
    const [contentStyle, setContentStyle] = useSpring(() => ({...spring}))

    setContainerStyle({ ...setStyles, config, delay: isActive ? 0.001 : 800 })
    setContentStyle({ ...setStyles, config, delay: isActive ? 800 : 0.001 })

    const infoContainerProps = {
        reset: true,
        style: { top: 0, right: 0, bottom: 0, left: 0, zIndex: button ? 1101 : 1000, 
                 background: '#FFF', position: 'fixed', height: '100%', transformOrigin: '0 0', ...containerStyle,
                 visibility: containerStyle.opacity.interpolate(o => o === 0 ? 'hidden' : 'visible')}
    }

    const infoContentProps = {
        className: `modal_info_content`,
        reset: true,
        style: { flexFlow: 'column nowrap', width: '100vw',
                 height: '100%', position: 'absolute', top: 0, left: 0, right: 0, padding: '60px 1.5rem 1rem 1.5rem', 
                 overflowY: 'scroll', overflowX: 'hidden', ...contentStyle }
    }

    const buttonProps = {
        className: `button`,
        onClick: handleClick,
        style: { cursor: 'pointer', maxWidth: 200, position: 'absolute', top: '1rem', right: '2.5rem', fontWeight: 200 }
    }

    return (
        <>
        {isActive && <RemoveScrollBar />}
        <AnimatedFlex className={zeroRightClassName} {...infoContainerProps}>
            <AnimatedFlex {...infoContentProps}>
                <Flex reset css={tw`flex-col w-full m-auto`} style={{ maxWidth: 850 }}>
                    <Text {...buttonProps} css={tw`py-2`}>{button ? button : 'Wróć do Menu'}</Text>
                    {children}
                </Flex>
            </AnimatedFlex>
        </AnimatedFlex>
        </>
    )
}

Modal.propTypes = {
    handleClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool,
    children: PropTypes.node.isRequired
}

export default memo(Modal)