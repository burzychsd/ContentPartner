// DEPENDENCIES
import React, { memo, useRef } from 'react'
import PropTypes from 'prop-types'
import { RemoveScrollBar, zeroRightClassName } from 'react-remove-scroll-bar'
import { useSpring, useChain, animated } from 'react-spring'
import shortid from 'shortid'
import { navigate } from 'gatsby'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Text from './../../atoms/Text'
import { H1 as Heading } from './../../atoms/Heading'

// STYLES
import './ServiceInfo.css'

const AnimatedFlex = animated(Flex)

const ServiceInfo = props => {

    const infoContainer = useRef()
    const infoContent = useRef()

    const { isActive, handleClick, content } = props

    const containerStyle = useSpring({ opacity: isActive ? 1 : 0, ref: infoContainer })
    const contentStyle = useSpring({ opacity: isActive ? 1 : 0, ref: infoContent })

    const infoContainerProps = {
        className: zeroRightClassName,
        reset: true,
        style: { top: 0, right: 0, bottom: 0, left: 0, zIndex: 1000, 
                 background: '#FFF', position: 'fixed', 
                 width: '100%', height: '100%', transformOrigin: '0 0', ...containerStyle,
                 visibility: containerStyle.opacity.interpolate(o => o === 0 ? 'hidden' : 'visible') }
    }

    const infoContentProps = {
        className: 'service_info_content',
        reset: true,
        style: { flexFlow: 'column nowrap', width: '100%', 
                 height: '100%', position: 'relative', padding: '60px 1rem 1rem 1rem', 
                 overflow: 'auto', ...contentStyle }
    }

    const buttonProps = {
        className: 'button',
        onClick: e => handleClick({
            articles: false,
            ecommerce: false,
            website: false,
            socialMedia: false,
            ebook: false,
            cooperation: false
        }),
        style: { cursor: 'pointer', maxWidth: 200, position: 'absolute', top: '1rem', right: '2.5rem', fontWeight: 200 }
    }

    const titleProps = {
        className: 'heading',
        style: { textAlign: 'center', margin: '4rem 0 2rem 0' }
    }

    const textProps = {
        className: 'text',
    }

    useChain(isActive ? [infoContainer, infoContent] : [infoContent, infoContainer])

    const listItems = content.content.listItems.map(item => 
        <li key={shortid.generate()} css={tw`font-body font-light my-1 text-dark_puce`} {...textProps}>{`- ${item}`}</li>
    )

    return (
        <>
        {isActive && <RemoveScrollBar />}
        <AnimatedFlex ref={infoContainer} {...infoContainerProps}>
            <AnimatedFlex ref={infoContent} {...infoContentProps}>
                <Flex reset css={tw`flex-col w-full m-auto`} style={{ maxWidth: 700 }}>
                    <Text {...buttonProps} css={tw`py-2`}>Wróć do Menu</Text>
                    <Heading {...titleProps}>{content.title}</Heading>
                    <Text css={tw`font-light my-4 px-2`} {...textProps}>{content.content.paragraph01}</Text>
                    <Text css={tw`font-light my-4 px-2`} {...textProps}>{content.content.paragraph02}</Text>
                    <Text css={tw`font-bold my-4 px-2`} {...textProps}>{content.content.listTitle}</Text>
                    <ul css={tw`flex flex-col px-2`} style={{ listStyle: 'none' }}>
                        {listItems}
                    </ul>
                    <Text css={tw`font-light my-8 px-2`} {...textProps}><span onClick={e => navigate('/kontakt')} css={tw`font-bold`}>Napisz lub zadzwoń</span>{` - ${content.content.paragraph03}`}</Text>
                </Flex>
            </AnimatedFlex>
        </AnimatedFlex>
        </>
    )
}

ServiceInfo.propTypes = {
    isActive: PropTypes.bool,
    handleClick: PropTypes.func.isRequired,
    content: PropTypes.object.isRequired
}

export default ServiceInfo