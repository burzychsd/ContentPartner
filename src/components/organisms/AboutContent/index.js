// DEPENDENCIES
import React, { memo } from 'react'
import shortid from 'shortid'
import loadable from '@loadable/component'

// COMPONENT
import Flex from './../../atoms/Flex'
const Text = loadable(() => import('./../../atoms/Text'))
const Image = loadable(() => import('./../../atoms/Image'))
const TrailHeading = loadable(() => import('./../../molecules/TrailHeading'))

// DATA
import { text } from './text'

// STYLES
import './AboutContent.css'

const AboutContent = props => {

    const { data } = props

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
        <Text className='text' key={shortid.generate()} css={tw`font-light my-4 lg:mb-8 lg:mt-4`}>{paragraph}</Text>
    )

    return (
        <Flex {...containerProps}>
            <Flex {...picContainerProps}>
                <Image fluid={data.imageTwo.childImageSharp.fluid} objFit='contain' objPosition='50% 100%' style={{ width: '100%', height: '100%', marginBottom: '1rem' }} />
            </Flex>
            <TrailHeading title='Franciszek Budzbon' customCss={{ ...tw`text-center my-0 lg:text-left subpixel-antialiased` }} />
            {paragraphs}
        </Flex>
    )
}

export default memo(AboutContent)