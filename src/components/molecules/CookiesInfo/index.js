// DEPENDENCIES
import React, { memo, useRef } from 'react'
import { RemoveScrollBar } from 'react-remove-scroll-bar'
import { animated, useChain } from 'react-spring'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Button from './../../atoms/Button'
import Text from './../../atoms/Text'

const AnimatedFlex = animated(Flex)

// STYLES
import './CookiesInfo.css'

// ANIMATIONS
import { fadeIn } from './../../../animations/fadeIn'

const CookiesInfo = props => {
    const { isActive, handleClose } = props

    const cookiesInfoContainer = useRef()
    const cookiesInfo = useRef()

    const cookiesInfoContainerProps = {
        reset: true,
        className: `cookies_info_container`
    }

    const textStyle = {...tw`max-w-lg mx-auto text-center px-2 leading-normal font-body font-light text-xs sm:text-base my-1 text-dark_puce`}

    const transitionStyles = first => ({ enter: 'translateY(0)', initial: first ? 'translateY(-100%)' : 'translateY(20px)'})

    const cookiesInfoContainerStyles = fadeIn(isActive, cookiesInfoContainer, transitionStyles('first'), 'noDelay')
    const cookiesInfoStyles = fadeIn(isActive, cookiesInfo, transitionStyles(), 'noDelay')

    useChain([cookiesInfoContainer, cookiesInfo], [0.1, 0.5])

    return (
        <>
            {isActive && <RemoveScrollBar />}
            <AnimatedFlex ref={cookiesInfoContainer} {...cookiesInfoContainerProps} style={cookiesInfoContainerStyles}>
                <AnimatedFlex reset ref={cookiesInfo} style={cookiesInfoStyles}>
                        <Text css={textStyle} style={{ fontWeight: 700 }}>Ta strona używa plików cookies.</Text>
                        <Text css={textStyle}>Integer et congue augue, interdum posuere risus. 
                        Cras ultricies eget nunc vitae fringilla. Pellentesque habitant morbi tristique senectus 
                        et netus et malesuada fames ac turpis egestas.</Text>
                        <Flex reset css={tw`w-full items-center justify-center`}>
                            <Button css={textStyle} style={{ background: 'transparent', margin: '1rem 0.5rem' }} onClick={handleClose}>Akceptuję</Button>
                            <Button css={textStyle} style={{ background: 'transparent', margin: '1rem 0.5rem' }}>Czytaj więcej</Button>
                        </Flex>
                </AnimatedFlex>
            </AnimatedFlex>
        </>
    )
}

export default memo(CookiesInfo)