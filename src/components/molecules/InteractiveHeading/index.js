// DEPENDENCIES
import React, { memo, useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import { animated } from 'react-spring'

// COMPONENTS
import Flex from './../../atoms/Flex'
import { H1 as Heading } from './../../atoms/Heading'

// STYLES
import classes from './InteractiveHeading.module.css'

// ANIMATION
import { titleAnimation } from './animation'

const InteractiveHeading = ({ title, containerCss }) => {

    const containerElem = useRef(null)

    const initialMousePos = { x: 100, y: 0 }
    const [mousePos, setMousePos] = useState(initialMousePos)
    const [mounted, setMounted] = useState(false)
    const [animationEnd, setAnimationEnd] = useState(false)

    useEffect(() => {
        const asyncFunc = async () => {
            await setMounted(true)
            await setTimeout(() => setAnimationEnd(true), 2000)
        }

        asyncFunc()
    }, [])

    const handleMouseMove = event => {
        event = event.nativeEvent
        const elem = containerElem.current

        const newX = (event.offsetX / elem.clientWidth) * 100;
        const newY = (event.offsetY / elem.clientHeight) * 100;
        const newMousePos = {
            x: newX,
            y: newY
        }

        setMousePos(newMousePos)
    }

    const handleMouseOut = () => setMousePos(initialMousePos)

    const textContainerProps = {
        as: `section`,
        className: classes.textContainer,
        noneStyles: true,
        style: { '--maskX': mousePos.x, '--maskY': mousePos.y },
        onMouseMove: e => animationEnd ? handleMouseMove(e) : null,
        onMouseOut: e => animationEnd ? handleMouseOut() : null,
        ref: containerElem
    }

    const headingProps = num => ({
        className: num === 1 ? 'heading' : `heading ${classes.textContentClone}`
    })

    const letters = title.split('')

    const trail = titleAnimation(letters, mounted)

    return (
        <Flex {...textContainerProps} css={containerCss}>
            <Heading {...headingProps(1)}
            css={tw`text-center my-2 xl:text-left subpixel-antialiased`}
            style={{ color: '#B4EBCA' }}>{letters}</Heading>
            <Heading {...headingProps(2)}
            css={tw`text-center my-2 xl:text-left absolute subpixel-antialiased`}
            style={{ color: '#463E43', top: 0, left: 0, right: 0, bottom: 0 }}>{
                trail.map((props, i) => <animated.span key={shortid.generate()} style={props}>{letters[i]}</animated.span>)
            }
            </Heading>
        </Flex>
    )
}

InteractiveHeading.propTypes = {
    title: PropTypes.string.isRequired,
    containerCss: PropTypes.object
}

export default memo(InteractiveHeading)