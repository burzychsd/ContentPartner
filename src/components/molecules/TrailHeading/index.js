// DEPENDENCIES
import React, { memo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import { animated } from 'react-spring'

// COMPONENTS
import Flex from '../../atoms/Flex'
import { H1 as Heading } from '../../atoms/Heading'

// ANIMATION
import { titleAnimation } from './animation'

const TrailHeading = ({ title }) => {

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

    }, [])

    const letters = title.split('')

    const trail = titleAnimation(letters, mounted)

    return (
        <Heading
        className='heading'
        css={tw`text-center my-2 xl:text-left subpixel-antialiased`}>{
            trail.map((props, i) => <animated.span key={shortid.generate()} style={props}>{letters[i]}</animated.span>)
        }
        </Heading>
    )
}

TrailHeading.propTypes = {
    title: PropTypes.string.isRequired
}

export default memo(TrailHeading)