// DEPENDENCIES
import React, { memo, useRef } from 'react'
import PropTypes from 'prop-types'
import { RemoveScrollBar, zeroRightClassName } from 'react-remove-scroll-bar'
import { useSpring, useChain, animated, config } from 'react-spring'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Text from './../../atoms/Text'

// STYLES
import './Modal.css'

const AnimatedFlex = animated(Flex)

const Modal = props => {

    const infoContainer = useRef()
    const infoContent = useRef()

    const { isActive, handleClick, children } = props

    const containerStyle = useSpring({ opacity: isActive ? 1 : 0, ref: infoContainer, config: config.stiff})
    const contentStyle = useSpring({ opacity: isActive ? 1 : 0, ref: infoContent, config: config.stiff })

    const infoContainerProps = {
        className: zeroRightClassName,
        reset: true,
        style: { top: 0, right: 0, bottom: 0, left: 0, zIndex: 1000, 
                 background: '#FFF', position: 'fixed', 
                 width: '100vw', height: '100vh', transformOrigin: '0 0', ...containerStyle,
                 visibility: containerStyle.opacity.interpolate(o => o === 0 ? 'hidden' : 'visible') }
    }

    const infoContentProps = {
        className: 'modal_info_content',
        reset: true,
        style: { flexFlow: 'column nowrap', width: '100%', 
                 height: '100%', position: 'relative', padding: '60px 1.5rem 1rem 1.5rem', 
                 overflow: 'auto', ...contentStyle }
    }

    const buttonProps = {
        className: 'button',
        onClick: handleClick,
        style: { cursor: 'pointer', maxWidth: 200, position: 'absolute', top: '1rem', right: '2.5rem', fontWeight: 200 }
    }

    useChain(isActive ? [infoContainer, infoContent] : [infoContent, infoContainer])

    return (
        <>
        {isActive && <RemoveScrollBar />}
        <AnimatedFlex ref={infoContainer} {...infoContainerProps}>
            <AnimatedFlex ref={infoContent} {...infoContentProps}>
                <Flex reset css={tw`flex-col w-full m-auto`} style={{ maxWidth: 850 }}>
                    <Text {...buttonProps} css={tw`py-2`}>Wróć do Menu</Text>
                    {children}
                </Flex>
            </AnimatedFlex>
        </AnimatedFlex>
        </>
    )
}

Modal.propTypes = {
    handleClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
}

export default memo(Modal)