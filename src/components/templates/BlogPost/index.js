// DEPENDENCIES
import React, { memo, useState, useEffect } from 'react'
import { animated, useSpring } from 'react-spring'
import loadable from '@loadable/component'
import { navigate } from 'gatsby'

// COMPONENTS
import SEO from './../../templates/SEO'
import Flex from './../../atoms/Flex'
import { H1 as Heading } from './../../atoms/Heading'
import Text from './../../atoms/Text'
const Disqus = loadable(() => import('gatsby-plugin-disqus'))

const AnimatedFlex = animated(Flex)

// STYLES
import './BlogPost.css'

const BlogPost = props => {

    const { pageContext } = props

    const [mounted, setMounted] = useState(false)

    const { id, title, src, date, author, content } = pageContext

    const config = { mass: 1, tension: 280, friction: 60 }
    const setStyles = { opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0px)' : 'translateY(10px)' }
    const spring = { from: { opacity: 0, transform: 'translateY(10px)' } }

    const [picContainerStyle, setPicContainerStyle] = useSpring(() => ({...spring}))
    const [postContainerStyle, setPostContainerStyle] = useSpring(() => ({ from : { opacity: 0 } }))

    setPicContainerStyle({...setStyles, config, delay: mounted ? 600 : 300 })
    setPostContainerStyle({ opacity: mounted ? 1 : 0, config, delay: mounted ? 300 : 600 })

    useEffect(() => {
        setMounted(true)

        return () => {
            setMounted(false)
        }
    }, [])

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

    const disqusConfig = {
        id,
        title
    }

    return (
        <>
            <SEO title={title} />
            <AnimatedFlex {...blogPostPicContainer}
            style={{ background: `url(${src}) no-repeat center center / cover`, ...picContainerStyle }} />
            <AnimatedFlex {...blogPostContentContainer} style={{ ...postContainerStyle, background: '#FFF' }}>
                <Heading {...headingProps} css={tw`mt-12 text-center mx-auto`} style={{ maxWidth: 750 }}>{title}</Heading>
                <Flex {...blogPostInfoContainer} >
                    <Text {...spanProps('date')} css={tw`text-base sm:text-lg font-heading font-light`}>{date.slice(0, 10)}</Text>
                    <Text {...spanProps('author')} css={tw`text-base sm:text-lg font-heading font-light`}>{author}</Text>
                </Flex>
                <Flex {...blogPostBodyProps} css={tw`mt-12 mb-12 w-full flex-col items-start`} dangerouslySetInnerHTML={{ __html: content }} />
                <Text className='text' css={tw`font-light mb-24`}><span css={tw`font-bold`} onClick={() => navigate('/o-mnie/')}>Poznajmy się</span></Text>
                <Disqus 
                config={disqusConfig}
                style={{ marginBottom: '6rem' }}
                />
            </AnimatedFlex>
        </>
    )
}

export default memo(BlogPost)