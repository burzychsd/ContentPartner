// DEPENDENCIES
import React, { memo } from 'react'
import shortid from 'shortid'

// COMPONENT
import Flex from './../../atoms/Flex'
import Text from './../../atoms/Text'
import Image from './../../atoms/Image'
import TrailHeading from './../../molecules/TrailHeading'

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
        <Text className='text' key={shortid.generate()} css={tw`text-light my-4 lg:my-8`}>{paragraph}</Text>
    )

    return (
        <Flex {...containerProps}>
            <Flex {...picContainerProps}>
                <Image fluid={data.imageTwo.childImageSharp.fluid} objFit='contain' style={{ width: '100%', height: '100%' }} />
            </Flex>
            <TrailHeading title='Franciszek Budzbon' customCss={{ ...tw`text-center my-2 lg:text-left subpixel-antialiased` }} />
            {paragraphs}
        </Flex>
    )
}

export default memo(AboutContent)