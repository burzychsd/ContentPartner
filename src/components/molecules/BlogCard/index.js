// DEPENDENCIES
import React, { memo } from 'react'

// COMPONENTS
import Flex from './../../atoms/Flex'
import { H1 as Heading } from './../../atoms/Heading'
import Text from './../../atoms/Text'
import Button from './../../atoms/Button'

// STYLES
import './BlogCard.css'

const BlogCard = props => {
    const { data } = props

    const blogCardContainerProps = {
        reset: true,
        className: `blog_card_container`
    }

    const blogPicContainerProps = {
        reset: true,
        className: `blog_pic_container`,
        style: { background: `url(${data.postPic.file.url}) no-repeat center center / cover` }
    }

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

    const buttonProps = {
        className: `button`
    }

    return (
        <Flex {...blogCardContainerProps}>
            <Flex {...blogPicContainerProps}></Flex>
            <Flex {...blogCardInfoProps}>
                <Heading {...headingProps} css={tw`mt-6 mb-4 lg:mt-0`}>{data.postTitle}</Heading>
                <Text {...textProps}>{data.shortDescription}</Text>
                <Button {...buttonProps}>Czytaj więcej</Button>
            </Flex>
        </Flex>
    )
}

export default memo(BlogCard)