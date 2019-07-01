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

    const { setShowModal } = props

    const [active, setActive] = useState(false)

    const config = { mass: 1, tension: 180, friction: 25 }
    const setContainerStyle = { opacity: active ? 1 : 0, transform: active ? 'translateY(0%)' : 'translateY(-100%)' }
    const setInfoStyle = { opacity: active ? 1 : 0, transform: active ? 'translateY(0px)' : 'translateY(35px)' }
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
        setCookiesInfoContainerStyles({ ...setContainerStyle, config, delay: active ? 200 : 0.001 })
        setCookiesInfoStyles({ ...setInfoStyle, config, delay: active ? 0.001 : 200 })
    }, [active])

    const setStatus = async () => {
        await localStorage.setItem('cookiesInfo', 'active')
        await setTimeout(() =>setActive(true), 3500)
    }

    const handleClose = () => {
        localStorage.setItem('cookiesInfo', 'accepted')
        setActive(false)
    }

    const cookiesInfoContainerProps = {
        reset: true,
        className: `cookies_info_container`
    }

    const textStyle = {...tw`max-w-lg mx-auto text-center px-2 leading-normal font-body font-light text-xs sm:text-base my-1 text-dark_puce`}

    return (
        <>
            {active && <RemoveScrollBar />}
            <AnimatedFlex {...cookiesInfoContainerProps} style={cookiesInfoContainerStyles}>
                <AnimatedFlex reset style={{ ...cookiesInfoStyles, visibility: cookiesInfoStyles.opacity.interpolate(o => o === 0 ? 'hidden' : 'visible') }}>
                        <Text css={textStyle} style={{ fontWeight: 700 }}>Ta strona używa plików cookies.</Text>
                        <Text css={textStyle}>Aby strona odpowiednio działała w trybie PWA oraz w celu gromadzenia danych w ramach Google Analytics, wykorzytujemy tzw. ciasteczka. Korzystając z tej strony, godzisz się na ich wykorzystywanie.</Text>
                        <Flex reset css={tw`w-full items-center justify-center`}>
                            <Button css={textStyle} style={{ background: 'transparent', margin: '1rem 0.5rem' }} onClick={handleClose}>Akceptuję</Button>
                            <Button css={textStyle} style={{ background: 'transparent', margin: '1rem 0.5rem' }} onClick={() => setShowModal({ modal: true, faq: false, cookies: true })}>Czytaj więcej</Button>
                        </Flex>
                </AnimatedFlex>
            </AnimatedFlex>
        </>
    )
}

export default memo(CookiesInfo)