// DEPENDENCIES
import React, { memo, Fragment, useEffect, useState, useRef } from 'react'
import { animated, useChain } from 'react-spring'

// COMPONENTS
import Flex from './../../atoms/Flex'
import TrailHeading from '../../molecules/TrailHeading'
import Text from './../../atoms/Text'
import Button from './../../atoms/Button'
import TimeLineGraphic from './../../../images/svg/timeline_graphic.svg'
import BulbsGraphic from './../../../images/svg/bulbs_graphic.svg'

const AnimatedText = animated(Text)
const AnimatedButton = animated(Button)

// PROPS
import { containerProps,
         textProps, buttonProps, timelineProps, bulbsProps } from './props'

// ANIMATION
import { fadeIn } from './../../../animations/fadeIn'

const HomeContent = () => {

    const content = {
        title: `Słowa to nie zbiór znaków.`,
        subtitle: `Słowa to treść Twojego biznesu. Zamów artykuły, opisy 
                   oraz inne teksty, które inspirują i przekonują.`,
        button: `Dowiedz się więcej`,
    }

    const [mounted, setMounted] = useState(false)

    const text = useRef()
    const heading = useRef()

    useEffect(() => {
        setMounted(true)

    }, [])

    const textStyle = fadeIn(mounted, text)
    const buttonStyle = fadeIn(mounted, heading)

    useChain([text, heading], [0.2, 0.4])

    return (
        <Fragment>
            <Flex
            {...containerProps}
            css={tw`w-full flex-col justify-center xl:self-start`}>
                <TrailHeading title={content.title} />
                <AnimatedText
                ref={text}
                {...textProps(textStyle)}
                css={tw`w-full font-light text-center mx-auto mt-2
                px-0 md:px-4 xl:px-0 xl:w-4/5 xl:text-left xl:m-0`}>{content.subtitle}</AnimatedText>
                <AnimatedButton
                ref={heading}
                {...buttonProps(buttonStyle)}
                css={tw`relative self-center xl:self-start`}>{content.button}</AnimatedButton>
            </Flex>
            <Flex reset {...timelineProps}>
                <TimeLineGraphic style={{ width: '100%' }} />
            </Flex>
            <Flex reset {...bulbsProps}>
                <BulbsGraphic style={{ width: '100%' }} />
            </Flex>
        </Fragment>
    )
}

export default memo(HomeContent)