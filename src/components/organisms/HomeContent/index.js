// DEPENDENCIES
import React, { memo, useEffect, useState } from 'react'
import loadable from '@loadable/component'
import PropTypes from 'prop-types'

// COMPONENTS
import Flex from './../../atoms/Flex'
import { H1 as Heading } from './../../atoms/Heading'

// LAZY LOAD
const Text = loadable(() => import(/* webpackPrefetch: true */ './../../atoms/Text'))
const Button = loadable(() => import(/* webpackPrefetch: true */ './../../atoms/Button'))
const TimeLineGraphic = loadable(() => import(/* webpackPrefetch: true */ './../../../images/svg/timeline_graphic.svg'))
const BulbsGraphic = loadable(() => import(/* webpackPrefetch: true */ './../../../images/svg/bulbs_graphic.svg'))

// PROPS
import { sectionProps, containerProps, headingProps, 
         textProps, buttonProps, timelineProps, bulbsProps } from './props'

// ANIMATION
import { loaderAnimation } from './../../molecules/Loader/animation'

const HomeContent = () => {

    const content = {
        title: `Słowa to nie zbiór znaków`,
        subtitle: `Słowa to treść Twojego biznesu. Zamów artykuły, opisy 
                   oraz inne teksty, które inspirują i przekonują.`,
        button: `Dowiedz się więcej`
    }

    return (
        <Flex
        {...sectionProps}
        css={tw`relative w-full flex-col items-center xl:items-start`}>
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
            <Flex reset {...timelineProps}>
                <TimeLineGraphic style={{ width: '100%' }} />
            </Flex>
            <Flex reset {...bulbsProps}>
                <BulbsGraphic style={{ width: '100%' }} />
            </Flex>
        </Flex>
    )
}

export default memo(HomeContent)