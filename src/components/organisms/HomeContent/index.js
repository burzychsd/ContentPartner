// DEPENDENCIES
import React, { memo, Fragment } from 'react'

// COMPONENTS
import Flex from './../../atoms/Flex'
import InteractiveHeading from './../../molecules/InteractiveHeading'
import Text from './../../atoms/Text'
import Button from './../../atoms/Button'
import TimeLineGraphic from './../../../images/svg/timeline_graphic.svg'
import BulbsGraphic from './../../../images/svg/bulbs_graphic.svg'

// PROPS
import { containerProps,
         textProps, buttonProps, timelineProps, bulbsProps } from './props'

const HomeContent = () => {

    const content = {
        title: `Słowa to nie zbiór znaków.`,
        subtitle: `Słowa to treść Twojego biznesu. Zamów artykuły, opisy 
                   oraz inne teksty, które inspirują i przekonują.`,
        button: `Dowiedz się więcej`
    }

    return (
        <Fragment>
            <Flex
            {...containerProps}
            css={tw`w-full flex-col justify-center xl:self-start`}>
                <InteractiveHeading>{content.title}</InteractiveHeading>
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
        </Fragment>
    )
}

export default memo(HomeContent)