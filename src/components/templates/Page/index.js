// DEPENDENCIES
import React, { memo, useRef} from 'react'
import { animated, useSpring, useChain, useTransition } from 'react-spring'
import PropTypes from 'prop-types'
import loadable from '@loadable/component'

// COMPONENTS
import Flex from './../../atoms/Flex'
const Footer = loadable(() => import('./../../organisms/Footer'))

const AnimatedFlex = animated(Flex)
const AnimatedFooter = animated(Footer)

const Page = props => {
    const { footer, style, children, minHeight, status, noTransition } = props

    const sectionRef = useRef()
    const containerRef = useRef()
    const footerRef = useRef()

    const config = { mass: 1, tension: 180, friction: 20 }
    const setStyle = { opacity: status ? 1 : 0 }
    const setFooter = { opacity: footer ? 1 : 0 }
    const spring = { from: { opacity: 0 } }

    const [sectionStyle, setSectionStyle] = useSpring(() => ({...spring}))
    const [footerStyle, setFooterStyle] = useSpring(() => ({...spring}))

    setSectionStyle({ ...setStyle, config, ref: sectionRef })
    setFooterStyle({ ...setFooter, config, ref: footerRef })

    const transition = useTransition(status, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config,
        ref: containerRef,
    })

    useChain(status ? [sectionRef, containerRef, footerRef] : [footerRef, containerRef, sectionRef], [0.001, 0.35, 0.4])

    if (noTransition) {

        return (
            <Flex
            reset
            style={{ overflowX: 'hidden', ...style }}>
                <Flex
                className='section_container'
                reset css={tw`flex-col w-full items-center`}
                style={{ minHeight }}>
                    {children}
                </Flex>
                {footer && <Footer />}
            </Flex>
        )

    } else {
        return (
            <AnimatedFlex
            reset
            style={{ overflowX: 'hidden', ...style, ...sectionStyle,
            visibility: sectionStyle.opacity.interpolate(o => o === 0 ? 'hidden' : 'visible') }}>
                {
                    transition.map(({ item, key, props }) => 
                        item && <AnimatedFlex
                        key={key}
                        className='section_container'
                        reset css={tw`flex-col w-full items-center`}
                        style={{ minHeight, ...props }}>
                            {children}
                        </AnimatedFlex>
                    )
                }
                <AnimatedFooter innerRef={footerRef} style={footerStyle} />
            </AnimatedFlex>
        )
    }
}

Page.propTypes = {
    footer: PropTypes.bool,
    style: PropTypes.object.isRequired,
    children: PropTypes.node,
    status: PropTypes.bool,
    noTransition: PropTypes.bool
}

export default memo(Page)