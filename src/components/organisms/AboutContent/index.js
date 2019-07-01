// DEPENDENCIES
import React, { memo, useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import shortid from 'shortid'

// COMPONENT
import Flex from './../../atoms/Flex'
import Text from './../../atoms/Text'
import Image from './../../atoms/Image'
import TrailHeading from './../../molecules/TrailHeading'

const AnimatedFlex = animated(Flex)
const AnimatedText = animated(Text)

// DATA
import { text } from './text'

// STYLES
import './AboutContent.css'

const AboutContent = props => {

    const { data } = props

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        return () => {
            setMounted(false)
        }
    }, [])

    const config = { mass: 1, tension: 120, friction: 20 }

    const [aboutPicStyle, setAboutPicStyle] = useSpring(() => ({ from: { opacity: 0 } }))
    const [aboutContentStyle, setAboutContentStyle] = useSpring(() => ({ from: { opacity: 0, transform: 'translateY(35px)' } }))

    setAboutPicStyle({ opacity: mounted ? 1 : 0, config, delay: mounted ? 0.001 : 600 })
    setAboutContentStyle({ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0px)' : 'translateY(35px)', config, delay: mounted ? 600 : 0.001 })

    const containerProps = {
        reset: true,
        className: 'about_container'
    }

    const picContainerProps = {
        reset: true,
        className: 'about_pic_container'
    }

    const aboutContentProps = {
        reset: true,
        className: 'about_content_container'
    }

    const paragraphs = text.map(paragraph => 
        <AnimatedText style={aboutContentStyle} className='text' key={shortid.generate()} css={tw`font-light my-4 lg:mb-8 lg:mt-4`}>{paragraph}</AnimatedText>
    )

    return (
        <Flex {...containerProps} style={{ overflow: 'hidden' }}>
            <AnimatedFlex {...picContainerProps} style={aboutPicStyle}>
                <Image fluid={data.imageTwo.childImageSharp.fluid} objFit='contain' objPosition='50% 100%' style={{ width: '100%', height: '100%', marginBottom: '1rem' }} />
            </AnimatedFlex>
            <TrailHeading title='Franciszek Budzbon' customCss={{ ...tw`text-center my-0 lg:text-left subpixel-antialiased` }} />
            {paragraphs}
        </Flex>
    )
}

export default memo(AboutContent)