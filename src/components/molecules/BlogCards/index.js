// DEPENDENCIES
import React, { memo } from 'react'
import { navigate } from 'gatsby'
import { Spring, animated } from 'react-spring/renderprops'
import shortid from 'shortid'

// COMPONENTS
import Flex from '../../atoms/Flex'
import { H1 as Heading } from '../../atoms/Heading'
import Text from '../../atoms/Text'
import Button from '../../atoms/Button'
import VisibilitySensor from '../../atoms/VisibilitySensor'

const AnimatedFlex = animated(Flex)
const AnimatedText = animated(Text)
const AnimatedHeading = animated(Heading)
const AnimatedButton = animated(Button)

// STYLES
import './BlogCards.css'

const BlogCards = props => {
    const { data, location } = props

    const blogCardContainerProps = {
        reset: true,
        className: `blog_card_container`
    }

    const blogPicContainerProps = (data, props) => ({
        reset: true,
        className: `blog_pic_container`,
        style: { background: `url(${data.node.postPic.file.url}) no-repeat center center / cover`, ...props }
    })

    const blogCardInfoProps = {
        reset: true,
        className: `blog_card_info`
    }

    const headingProps = {
        className: `heading`
    }

    const textProps = {
        className: `text`
    }

    const buttonProps = data => ({
        className: `button`,
        onClick: e => navigate(`/post/${data.node.slug}`)
    })

    const spanProps = {
        className: `blog_date`
    }

    const animationStyles = isVisible => ({
        opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(10px)'
    })

    const animationConfig = { mass: 1, tension: 280, friction: 20 }

    const blogCards = data.map(data => 
        <Flex {...blogCardContainerProps} key={shortid.generate()}>
            <VisibilitySensor once partialVisibility>
                {({ isVisible }) => (
                    <>
                        <Spring
                        native
                        to={animationStyles(isVisible)}
                        delay={0.001}
                        config={animationConfig}>
                            { props => <AnimatedFlex {...blogPicContainerProps(data, props)} /> }
                        </Spring>
                        <Flex {...blogCardInfoProps}>
                            <Spring
                            native
                            to={animationStyles(isVisible)}
                            delay={200}
                            config={animationConfig}>
                                { props => <AnimatedText {...spanProps} style={props} css={tw`text-base sm:text-lg mt-4 lg:mt-0 mb-2 font-heading font-light`}>{data.node.createdAt.slice(0, 10)}</AnimatedText> }
                            </Spring>
                            <Spring
                            native
                            to={animationStyles(isVisible)}
                            delay={300}
                            config={animationConfig}>
                                { props => <AnimatedHeading {...headingProps} style={props} css={tw`mb-4 mt-0 px-0`}>{data.node.postTitle}</AnimatedHeading> }
                            </Spring>
                            <Spring
                            native
                            to={animationStyles(isVisible)}
                            delay={400}
                            config={animationConfig}>
                                { props => <AnimatedText {...textProps} style={props}>{data.node.shortDescription}</AnimatedText> }
                            </Spring>
                            <Spring
                            native
                            to={animationStyles(isVisible)}
                            delay={500}
                            config={animationConfig}>
                                { props => <AnimatedButton {...buttonProps(data)} style={props}>Czytaj więcej</AnimatedButton> }
                            </Spring>
                        </Flex>
                    </>
                )}
            </VisibilitySensor>
        </Flex>
    )

    return (
        <>
            {blogCards}
        </>
    )

}

export default memo(BlogCards)