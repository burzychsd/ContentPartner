// DEPENDENCIES
import React, { memo } from 'react'
import { useSpring, animated } from 'react-spring'
import loadable from '@loadable/component'

// COMPONENTS
import Flex from './../../atoms/Flex'
import { H1 as Heading } from './../../atoms/Heading'
import Text from './../../atoms/Text'
import VisibilitySensor from './../../atoms/VisibilitySensor'

const AnimatedFlex = animated(Flex)

const Stage01 = loadable(() => import('./../../../images/svg/graphic01.svg'))
const Stage02 = loadable(() => import('./../../../images/svg/graphic02.svg'))
const Stage03 = loadable(() => import('./../../../images/svg/graphic03.svg'))
const Stage04 = loadable(() => import('./../../../images/svg/graphic04.svg'))
const Stage05 = loadable(() => import('./../../../images/svg/graphic05.svg'))

// STYLES
import './StageInfo.css'

export const StageContainer = props => {
    const { graphicNum, title, text, isVisible } = props

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

    const condition = graphicNum % 2 !== 0
    const config = { mass: 1, tension: 210, friction: 20 }
    const setStyles = { opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0px)' : 
    graphicNum % 2 !== 0 ? 'translateX(-100px)' : 'translateX(100px)' }
    const spring = { from: { opacity: 0, transform: condition ? 'translateX(-100px)' : 'translateX(100px)' } }

    const [stageInfoStyle, setStageInfoStyle] = useSpring(() => ({ ...spring }))

    setStageInfoStyle({ ...setStyles, config, delay: 600 })

    return (
        <>
            <Flex {...graphicContainerProps}>
                {
                    graphicNum === 1 ?
                    isVisible && <Stage01 {...stageGraphicProps} /> :
                    graphicNum === 2 ?
                    isVisible && <Stage02 {...stageGraphicProps} /> :
                    graphicNum === 3 ?
                    isVisible && <Stage03 {...stageGraphicProps} /> :
                    graphicNum === 4 ?
                    isVisible && <Stage04 {...stageGraphicProps} /> :
                    isVisible && <Stage05 {...stageGraphicProps} />
                }
            </Flex>
            <AnimatedFlex {...infoContainerProps} css={tw`flex-col`} style={stageInfoStyle}>
            <Heading className='heading stage_heading' css={tw`m-0`}>{title}</Heading>
                <Text className='text stage_text' css={tw`mt-2 mb-6 font-light leading-relaxed break-all`}>{text}</Text>
            </AnimatedFlex>
        </>
    )
}

const StageInfo = props => {
    const { graphicNum, title, text } = props

    const containerProps = {
        className: `stageInfo_container`,
        as: `section`,
        reset: true
    }

    return (
        <Flex {...containerProps}>
            <VisibilitySensor once partialVisibility>
                {({ isVisible }) => (
                    <StageContainer
                    graphicNum={graphicNum}
                    title={title}
                    text={text}
                    isVisible={isVisible} />
                )}
            </VisibilitySensor>
        </Flex>
    )
}

export default memo(StageInfo)