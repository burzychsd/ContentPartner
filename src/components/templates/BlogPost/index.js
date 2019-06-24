// DEPENDENCIES
import React, { memo, useState, useEffect, useRef } from 'react'
import { animated, useChain } from 'react-spring'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Page from './../../templates/Page'
import Text from './../../atoms/Text'
import { H1 as Heading } from './../../atoms/Heading'

const AnimatedFlex = animated(Flex)

// STYLES
import './BlogPost.css'

// ANIMATION
import { fadeIn } from './../../../animations/fadeIn'

const BlogPost = props => {

    const { style, pageContext, minHeight } = props
    const { slug, title, src, author, date, content } = pageContext

    const [mounted, setMounted] = useState(false)

    const picRef = useRef()
    const infoRef = useRef()

    const blogPostPicContainer = {
        reset: true,
        className: `blog_post_pic_container`
    }

    const blogPostContentContainer = {
        reset: true,
        className: `blog_post_content_container`
    }

    const blogPostInfoContainer = {
        reset: true,
        className: `blog_post_info_container`
    }

    const headingProps = {
        className: `heading`
    }

    const spanProps = type => ({
        as: `span`,
        className: type === 'date' ? `blog_post_date` : `blog_post_author`
    })

    const blogPostBodyProps = {
        as: `article`,
        className: 'blog_post_body'
    }


    useEffect(() => {
        setMounted(true)
    }, [])

    const transformStyles = {
        initial: `translateY(50px)`,
        enter: `translateY(0)`
    }

    const picContainerStyle = fadeIn(mounted, picRef, transformStyles, 'noDelay')
    const infoContainerStyle = fadeIn(mounted, infoRef, transformStyles, 'noDelay')

    useChain([picRef, infoRef], [0.2, 0.3])

    return (
        <Page footer style={style} minHeight={minHeight}>
            <AnimatedFlex ref={picRef} {...blogPostPicContainer}
            style={{ background: `url(${src}) no-repeat center center / cover`, ...picContainerStyle }} />
            <Flex {...blogPostContentContainer}>
                <Heading {...headingProps} css={tw`mt-12 text-center`}>{title}</Heading>
                <AnimatedFlex ref={infoRef} {...blogPostInfoContainer} style={infoContainerStyle}>
                    <Text {...spanProps('date')} css={tw`text-base sm:text-lg font-heading font-light`}>{date.slice(0, 10)}</Text>
                    <Text {...spanProps('author')} css={tw`text-base sm:text-lg font-heading font-light`}>{author}</Text>
                </AnimatedFlex>
                <Flex {...blogPostBodyProps} css={tw`my-12 w-full flex-col`} dangerouslySetInnerHTML={{ __html: content }} />
            </Flex>
        </Page>

    )
}

export default memo(BlogPost)