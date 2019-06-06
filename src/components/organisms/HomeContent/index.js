// DEPENDENCIES
import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

// COMPONENTS
import Flex from './../../atoms/Flex'
import { H1 as Heading } from './../../atoms/Heading'
import Text from './../../atoms/Text'
import Button from './../../atoms/Button'
import TimeLineGraphic from './../../../images/svg/timeline_graphic.svg'
import BulbsGraphic from './../../../images/svg/bulbs_graphic.svg'
import Section from '../../molecules/Section'

const HomeContent = ({ isWidth, orientation }) => {

    const conditionOrientation = orientation === 'landscape'
    const conditionWidth = isWidth.lg || isWidth.xl || isWidth.infinity

    const sectionProps = {
        sectionCss: { ...tw`relative w-full flex-col items-center xl:items-start` },
        style: { maxWidth: 960, height: '100%', margin: '0 auto' }
    }

    const containerProps = {
        reset: true,
        style: { maxWidth: 600, minHeight: '50%' }
    }

    const headingProps = {
        className: 'heading'
    }

    const textProps = {
        className: 'text'
    }

    const buttonProps = {
        reset: true,
        className: `button`,
        onClick: () => navigate('/proces')
    }

    const timelineProps = {
        style: { height: conditionOrientation ? '40%' : 'auto',
        width: conditionOrientation ? 'auto' : '80%',
        maxHeight: conditionOrientation && conditionWidth ? '40%' : '45%',
        position: 'absolute', left: 0, bottom: 0, maxWidth: 500, zIndex: -1 }
    }

    const bulbsProps = {
        style: { height: conditionOrientation ? '60%' : 'auto',
        width: conditionOrientation ? 'auto' : '40%',
        maxHeight: isWidth.lg ? 250 : isWidth.xl || isWidth.infinity ? 400 : null,
        minHeight: 120, position: 'absolute', right: 0, bottom: 0, zIndex: -1 }
    }

    return (
        <Section {...sectionProps}>
            <Flex {...containerProps} css={tw`flex-col justify-center`}>
                <Heading {...headingProps} css={tw`text-center my-2 xl:text-left`}>Słowa to nie zbiór znaków</Heading>
                <Text {...textProps} css={tw`w-full font-light text-center px-0 xs:px-8 xl:px-0 xl:w-4/5 xl:text-left`}>Słowa to treść Twojego biznesu. Zamów artykuły, opisy 
                oraz inne teksty, które inspirują i przekonują.</Text>
                <Button {...buttonProps} css={tw`self-center xl:self-start`}>Dowiedz się więcej</Button>
            </Flex>
            <TimeLineGraphic {...timelineProps} />
            {conditionWidth && <BulbsGraphic {...bulbsProps} />}
        </Section>
    )
}

HomeContent.propTypes = {
    isWidth: PropTypes.object.isRequired,
    orientation: PropTypes.string.isRequired
}

export default HomeContent