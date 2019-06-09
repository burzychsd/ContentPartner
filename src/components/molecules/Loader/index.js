// DEPENDENCIES
import React, { memo, useRef } from 'react'
import { useChain, animated } from 'react-spring'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Spin from './../../../images/svg/tail-spin.svg'

const AnimatedFlex = animated(Flex)

// ANIMATION
import { loaderAnimation, containerAnimation } from './animation'

const Loader = (props) => {

    const { animate } = props

    const container = useRef()
    const loaderContainer = useRef()

    const loaderTransition = loaderAnimation(animate, loaderContainer)
    const containerSpring = containerAnimation(animate, container)

    useChain(animate ? [container, loaderContainer] : [loaderContainer, container], [0, 0.2, 0.4])

    return (
            <AnimatedFlex
            ref={container}
            reset
            css={tw`w-full w-full fixed bg-white justify-center items-center`}
            style={{ top: 0, right: 0, bottom: 0, left: 0, zIndex: 1001, ...containerSpring, 
            visibility: containerSpring.opacity.interpolate(o => o === 0 ? 'hidden' : 'visibility') }}>
                {
                loaderTransition.map(({ item, key, props }) =>
                item &&
                <AnimatedFlex
                ref={loaderContainer}
                key={key}
                reset
                style={{ width: '25%', ...props }}>
                    <Spin style={{ width: '100%' }} />
                </AnimatedFlex>
                )}
            </AnimatedFlex>
        )

}

export default memo(Loader)