// DEPENDENCIES
import React, { memo, useEffect, useState, useRef } from 'react'
import { useSpring, animated } from 'react-spring'

// COMPONENTS
import TrailHeading from '../../molecules/TrailHeading'
import Text from './../../atoms/Text'
import Button from './../../atoms/Button'
import Flex from './../../atoms/Flex'
import TimeLineGraphic from './../../../images/svg/timeline_graphic.svg'
import Image from'./../../atoms/Image'

const AnimatedText = animated(Text)
const AnimatedButton = animated(Button)
const AnimatedFlex = animated(Flex)

// PROPS
import { containerProps,
         textProps, buttonProps, timelineProps, picProps } from './props'

const HomeContent = ({ data }) => {

    const content = {
        title: `Słowa to nie zbiór znaków.`,
        subtitle: `Słowa to treść Twojego biznesu. Zamów artykuły, opisy 
                   oraz inne teksty, które inspirują i przekonują.`,
        button: `Dowiedz się więcej`,
    }

    const [mounted, setMounted] = useState(false)

    const textRef = useRef()
    const buttonRef = useRef()

    const config = { mass: 1, tension: 120, friction: 20 }
    const setStyles = { opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0px)' : 'translate(10px)' }
    const spring = { from: { opacity: 0, transform: 'translateY(10px)' } }

    const [ textStyle, setTextStyle ] = useSpring(() => ({ ...spring }))
    const [ buttonStyle, setButtonStyle ] = useSpring(() => ({ ...spring }))
    const [ picStyle, setPicStyle ] = useSpring(() => ({ from: { opacity: 0 } }))

    setTextStyle({...setStyles, ref: textRef, config, delay: 1000})
    setButtonStyle({...setStyles, ref: buttonRef, config, delay: 1300})
    setPicStyle({ opacity: mounted ? 1 : 0, config, delay: 400 })

    useEffect(() => {
        setMounted(true)

        return () => {
            setMounted(false)
        }
    }, [])

    return (
        <>
            {mounted &&
            <>
                <Flex
                {...containerProps}
                css={tw`w-full flex-col justify-center xl:self-start`}>
                    <TrailHeading title={content.title} />
                    <AnimatedText
                    ref={textRef}
                    {...textProps(textStyle)}
                    css={tw`w-full font-light text-center mx-auto mt-2
                    px-0 md:px-4 xl:px-0 xl:w-4/5 xl:text-left xl:m-0`}>{content.subtitle}</AnimatedText>
                    <AnimatedButton
                    ref={buttonRef}
                    {...buttonProps(buttonStyle)}
                    css={tw`relative self-center xl:self-start py-2`}>{content.button}</AnimatedButton>
                </Flex>
                <Flex reset {...timelineProps}>
                    <TimeLineGraphic style={{ width: '100%' }} />
                </Flex>
                <AnimatedFlex reset {...picProps(picStyle)}>
                    <Image fluid={data.imageOne.childImageSharp.fluid} style={{ height: 'auto', width: '100%' }} />
                </AnimatedFlex>
            </>
            }
        </>
    )
}

export default memo(HomeContent)