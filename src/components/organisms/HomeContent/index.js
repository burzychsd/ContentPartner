// DEPENDENCIES
import React, { memo } from 'react'

// COMPONENTS
import Flex from './../../atoms/Flex'
import { H1 as Heading } from './../../atoms/Heading'
import Text from './../../atoms/Text'
import Button from './../../atoms/Button'
import TimeLineGraphic from './../../../images/svg/timeline_graphic.svg'
import BulbsGraphic from './../../../images/svg/bulbs_graphic.svg'
import Section from '../../molecules/Section'

// PROPS
import { sectionProps, containerProps, headingProps, 
         textProps, buttonProps, timelineProps, bulbsProps } from './props'

const HomeContent = () => {

    const content = {
        title: `Słowa to nie zbiór znaków`,
        subtitle: `Słowa to treść Twojego biznesu. Zamów artykuły, opisy 
                   oraz inne teksty, które inspirują i przekonują.`,
        button: `Dowiedz się więcej`
    }

    return (
        <Section {...sectionProps}>
            <Flex
            {...containerProps}
            css={tw`w-full flex-col justify-center`}>
                <Heading
                {...headingProps}
                css={tw`text-center my-2 xl:text-left`}>{content.title}</Heading>
                <Text
                {...textProps}
                css={tw`w-full font-light text-center mx-auto mt-2 
                px-0 md:px-8 xl:px-0 xl:w-4/5 xl:text-left xl:m-0`}>{content.subtitle}</Text>
                <Button
                {...buttonProps}
                css={tw`self-center xl:self-start`}>{content.button}</Button>
            </Flex>
            <Flex {...timelineProps}>
                <TimeLineGraphic style={{ width: '100%' }} />
            </Flex>
            <Flex {...bulbsProps}>
                <BulbsGraphic style={{ width: '100%' }} />
            </Flex>
        </Section>
    )
}

export default memo(HomeContent)