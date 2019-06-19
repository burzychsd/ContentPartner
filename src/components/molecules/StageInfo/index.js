// DEPENDENCIES
import React, { memo } from 'react'
import { Spring, animated } from 'react-spring/renderprops'

// COMPONENTS
import Flex from './../../atoms/Flex'
import { H1 as Heading } from './../../atoms/Heading'
import Text from './../../atoms/Text'
import VisibilitySensor from './../../atoms/VisibilitySensor'

const AnimatedFlex = animated(Flex)

import Stage01 from './../../../images/svg/graphic01.svg'
import Stage02 from './../../../images/svg/graphic02.svg'
import Stage03 from './../../../images/svg/graphic03.svg'
import Stage04 from './../../../images/svg/graphic04.svg'
import Stage05 from './../../../images/svg/graphic05.svg'

// STYLES
import './StageInfo.css'

const StageInfo = props => {
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
            <VisibilitySensor once partialVisibility>
                {({ isVisible }) => (
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
                        <Spring
                        native
                        to={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 
                              graphicNum % 2 !== 0 ? 'translateX(-100px)' : 'translateX(100px)' }} delay={300}>
                            {
                                props => <AnimatedFlex {...infoContainerProps} css={tw`flex-col`} style={props}>
                                            <Heading className='heading stage_heading' css={tw`m-0`}>{title}</Heading>
                                            <Text className='text stage_text' css={tw`mt-2 mb-6 font-light leading-relaxed break-all`}>{text}</Text>
                                        </AnimatedFlex>
                            }
                        </Spring>
                    </>
                )}
            </VisibilitySensor>
        </Flex>
    )
}

export default memo(StageInfo)