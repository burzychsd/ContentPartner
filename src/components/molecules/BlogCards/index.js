// DEPENDENCIES
import React, { memo } from 'react'
import { navigate } from 'gatsby'
import { useSpring, animated } from 'react-spring'
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

export const BlogCard = props => {
    const { data, isVisible } = props

    const config = { mass: 1, tension: 120, friction: 20 }
    const setStyles = { opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0px)' : 'translateY(35px)' }
    const spring = { from: { opacity: 0, transform: 'translateY(35px)' } }

    const [cardPicStyle, setCardPicStyle] = useSpring(() => ({ ...spring }))
    const [cardDateStyle, setCardDateStyle] = useSpring(() => ({ ...spring }))
    const [cardTitleStyle, setCardTitleStyle] = useSpring(() => ({ ...spring }))
    const [cardDescriptionStyle, setCardDescriptionStyle] = useSpring(() => ({ ...spring }))
    const [cardButtonStyle, setCardButtonStyle] = useSpring(() => ({ ...spring }))

    setCardPicStyle({ ...setStyles, config, delay: 200 })
    setCardDateStyle({ ...setStyles, config, delay: 300 })
    setCardTitleStyle({ ...setStyles, config, delay: 400 })
    setCardDescriptionStyle({ ...setStyles, config, delay: 500 })
    setCardButtonStyle({ ...setStyles, config, delay: 600 })

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

    return (
        <>
            <AnimatedFlex
            {...blogPicContainerProps(data, cardPicStyle)} />
            <Flex {...blogCardInfoProps}>
                <AnimatedText
                {...spanProps}
                style={cardDateStyle}
                css={tw`text-base sm:text-lg mt-4 lg:mt-0 mb-2 font-heading font-light`}>{data.node.createdAt.slice(0, 10)}</AnimatedText>
                <AnimatedHeading
                {...headingProps}
                style={cardTitleStyle}
                css={tw`mb-4 mt-0 px-0`}>{data.node.postTitle}</AnimatedHeading>
                <AnimatedText
                {...textProps}
                style={cardDescriptionStyle}>{data.node.shortDescription}</AnimatedText>
                <AnimatedButton
                {...buttonProps(data)}
                style={cardButtonStyle}>Czytaj więcej</AnimatedButton>
            </Flex>
        </>
    )
}

const BlogCards = props => {
    const { data, location } = props

    const blogCardContainerProps = {
        reset: true,
        className: `blog_card_container`
    }

    const blogCards = data.map(data => 
        <Flex {...blogCardContainerProps} key={shortid.generate()}>
            <VisibilitySensor once partialVisibility>
                {({ isVisible }) => (
                    <BlogCard data={data} isVisible={isVisible} />
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