// DEPENDENCIES
import React, { memo } from 'react'

// COMPONENTS
import Flex from './../../atoms/Flex'
import { H1 as Heading } from './../../atoms/Heading'
import Text from './../../atoms/Text'

import Stage01 from './../../../images/svg/graphic01.svg'
import Stage02 from './../../../images/svg/graphic02.svg'
import Stage03 from './../../../images/svg/graphic03.svg'
import Stage04 from './../../../images/svg/graphic04.svg'
import Stage05 from './../../../images/svg/graphic05.svg'

// STYLES
import './StageInfo.css'

const StageInfo = (props) => {
    const { graphicNum, title, text } = props

    const containerProps = {
        className: `stageInfo_container`,
        as: `section`,
        reset: true
    }

    const graphicContainerProps = {
        className: `graphic_container`,
        reset: true
    }

    const infoContainerProps = {
        className: `info_container`,
        reset: true
    }

    const stageGraphicProps = {
        preserveAspectRatio: `xMidYMid meet`
    }

    return (
        <Flex {...containerProps}>
            <Flex {...graphicContainerProps}>
                {
                    graphicNum === 1 ?
                    <Stage01 {...stageGraphicProps} /> :
                    graphicNum === 2 ?
                    <Stage02 {...stageGraphicProps} /> :
                    graphicNum === 3 ?
                    <Stage03 {...stageGraphicProps} /> :
                    graphicNum === 4 ?
                    <Stage04 {...stageGraphicProps} /> :
                    <Stage05 {...stageGraphicProps} />
                }
            </Flex>
            <Flex {...infoContainerProps} css={tw`flex-col`}>
                <Heading className='heading stage_heading' css={tw`m-0`}>{title}</Heading>
                <Text className='text stage_text' css={tw`mt-2 mb-6 font-light leading-relaxed break-all`}>{text}</Text>
            </Flex>
        </Flex>
    )
}

export default memo(StageInfo)