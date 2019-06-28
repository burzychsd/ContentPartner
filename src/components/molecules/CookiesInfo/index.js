// DEPENDENCIES
import React, { memo, useEffect, useState } from 'react'
import { RemoveScrollBar } from 'react-remove-scroll-bar'
import { useSpring, animated } from 'react-spring'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Button from './../../atoms/Button'
import Text from './../../atoms/Text'

const AnimatedFlex = animated(Flex)

// STYLES
import './CookiesInfo.css'

const CookiesInfo = props => {

    const [isActive, setIsActive] = useState(false)

    const config = { mass: 1, tension: 180, friction: 25 }
    const setContainerStyle = { opacity: isActive ? 1 : 0, transform: isActive ? 'translateY(0%)' : 'translateY(-100%)' }
    const setInfoStyle = { opacity: isActive ? 1 : 0, transform: isActive ? 'translateY(0px)' : 'translateY(35px)' }
    const spring1 = { from: { opacity: 0, transform: 'translateY(-100%)' } }
    const spring2 = { from: { opacity: 0, transform: 'translateY(35px)' } }

    const [cookiesInfoContainerStyles, setCookiesInfoContainerStyles] = useSpring(() => ({ ...spring1 }))
    const [cookiesInfoStyles, setCookiesInfoStyles] = useSpring(() => ({ ...spring2 }))

    useEffect(() => {
        if ('cookiesInfo' in localStorage) {
            if (localStorage.getItem('cookiesInfo') === 'active') {
                setStatus()
            } else {
                console.log('cookies accepted')
            }
        } else {
            setStatus()
        }
    }, [])

    useEffect(() => {
        setCookiesInfoContainerStyles({ ...setContainerStyle, config, delay: isActive ? 200 : 0.001 })
        setCookiesInfoStyles({ ...setInfoStyle, config, delay: isActive ? 0.001 : 200 })
    }, [isActive])

    const setStatus = async () => {
        await localStorage.setItem('cookiesInfo', 'active')
        await setTimeout(() =>setIsActive(true), 3500)
    }

    const handleClose = () => {
        localStorage.setItem('cookiesInfo', 'accepted')
        setIsActive(false)
    }

    const cookiesInfoContainerProps = {
        reset: true,
        className: `cookies_info_container`
    }

    const textStyle = {...tw`max-w-lg mx-auto text-center px-2 leading-normal font-body font-light text-xs sm:text-base my-1 text-dark_puce`}

    return (
        <>
            {isActive && <RemoveScrollBar />}
            <AnimatedFlex {...cookiesInfoContainerProps} style={cookiesInfoContainerStyles}>
                <AnimatedFlex reset style={cookiesInfoStyles}>
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