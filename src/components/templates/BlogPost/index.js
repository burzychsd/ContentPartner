// DEPENDENCIES
import React, { memo, useState, useEffect } from 'react'
import { animated, useSpring } from 'react-spring'
import loadable from '@loadable/component'

// COMPONENTS
import Page from './../../templates/Page'
import Flex from './../../atoms/Flex'
import { H1 as Heading } from './../../atoms/Heading'
import Text from './../../atoms/Text'
const Disqus = loadable(() => import('gatsby-plugin-disqus'))

const AnimatedFlex = animated(Flex)

// STYLES
import './BlogPost.css'

const BlogPost = props => {

    const { style, pageContext, minHeight, location, status } = props
    const { id, title, src, date, author, content } = pageContext

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setTimeout(() => setMounted(true), 800)

        return () => {
            setMounted(false)
        }

    }, [location.pathname])

    const config = { mass: 1, tension: 180, friction: 12 }
    const setStyles = { opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0px)' : 'translateY(35px)' }
    const spring = { from: { opacity: 0, transform: 'translateY(35px)' } }

    const [picContainerStyle, setPicContainerStyle] = useSpring(() => ({...spring}))

    setPicContainerStyle({...setStyles, config, delay: 0.001})

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
        className: 'blog_post_body',
        as: `article`
    }

    return (
        <Page footer style={style} minHeight={minHeight} status={status}>
            {status ?
            <>
                <AnimatedFlex {...blogPostPicContainer}
                style={{ background: `url(${src}) no-repeat center center / cover`, ...picContainerStyle }} />
                <Flex {...blogPostContentContainer}>
                    <Heading {...headingProps} css={tw`mt-12 text-center`}>{title}</Heading>
                    <Flex {...blogPostInfoContainer}>
                        <Text {...spanProps('date')} css={tw`text-base sm:text-lg font-heading font-light`}>{date.slice(0, 10)}</Text>
                        <Text {...spanProps('author')} css={tw`text-base sm:text-lg font-heading font-light`}>{author}</Text>
                    </Flex>
                    <Flex {...blogPostBodyProps} css={tw`mt-12 mb-24 w-full flex-col`} dangerouslySetInnerHTML={{ __html: content }} />
                    {/* <Disqus 
                    identifier={blog.id}
                    title={blog.title}
                    style={{ marginBottom: '6rem' }} */}
                    />
                </Flex>
            </> : null
            }
        </Page>

    )
}

export default memo(BlogPost)