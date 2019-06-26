// DEPENDENCIES
import React, { memo, useState, useEffect, useRef } from 'react'
import { animated, useChain } from 'react-spring'
import loadable from '@loadable/component'

// COMPONENTS
import Page from './../../templates/Page'
import Flex from './../../atoms/Flex'
import { H1 as Heading } from './../../atoms/Heading'
const LazyFlex = loadable(() => import('./../../atoms/Flex'))
const Text = loadable(() => import('./../../atoms/Text'))
const Disqus = loadable(() => import('gatsby-plugin-disqus'))

const AnimatedFlex = animated(Flex)
const AnimatedHeading = animated(Heading)

// STYLES
import './BlogPost.css'

// ANIMATION
import { fadeIn } from './../../../animations/fadeIn'

const BlogPost = props => {

    const { style, pageContext, minHeight } = props
    const { title, src, author, date, content, id } = pageContext

    const [mounted, setMounted] = useState(false)

    const picRef = useRef()
    const infoRef = useRef()
    const titleRef = useRef()

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
        initial: `translateY(20px)`,
        enter: `translateY(0)`
    }

    const picContainerStyle = fadeIn(mounted, picRef, transformStyles, true)
    const infoContainerStyle = fadeIn(mounted, infoRef, transformStyles, true)
    const titleStyle = fadeIn(mounted, titleRef, transformStyles, true)

    useChain([picRef, infoRef, titleRef], [0.1, 0.2, 0.3])

    return (
        <Page footer style={style} minHeight={minHeight}>
            <AnimatedFlex ref={picRef} {...blogPostPicContainer}
            style={{ background: `url(${src}) no-repeat center center / cover`, ...picContainerStyle }} />
            <Flex {...blogPostContentContainer}>
                <AnimatedHeading ref={titleRef} {...headingProps} css={tw`mt-12 text-center`} style={titleStyle}>{title}</AnimatedHeading>
                <AnimatedFlex ref={infoRef} {...blogPostInfoContainer} style={infoContainerStyle}>
                    <Text {...spanProps('date')} css={tw`text-base sm:text-lg font-heading font-light`}>{date.slice(0, 10)}</Text>
                    <Text {...spanProps('author')} css={tw`text-base sm:text-lg font-heading font-light`}>{author}</Text>
                </AnimatedFlex>
                <LazyFlex {...blogPostBodyProps} css={tw`mt-12 mb-24 w-full flex-col`} dangerouslySetInnerHTML={{ __html: content }} />
                <Disqus 
                identifier={id}
                title={title}
                style={{ marginBottom: '8rem' }}
                />
            </Flex>
        </Page>

    )
}

export default memo(BlogPost)