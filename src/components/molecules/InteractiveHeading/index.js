// DEPENDENCIES
import React, { memo, useState, useRef } from 'react'

// COMPONENTS
import Flex from './../../atoms/Flex'
import { H1 as Heading } from './../../atoms/Heading'

// STYLES
import classes from './InteractiveHeading.module.css'

const InteractiveHeading = ({ children }) => {

    const containerElem = useRef(null)

    const initialMousePos = { x: 100, y: 0 }
    const [mousePos, setMousePos] = useState(initialMousePos)

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
        onMouseMove: e => handleMouseMove(e),
        onMouseOut: e => handleMouseOut(),
        ref: containerElem
    }

    const headingProps = num => ({
        className: num === 1 ? 'heading' : `heading ${classes.textContentClone}`
    })

    return (
        <Flex {...textContainerProps}>
            <Heading {...headingProps(1)}
            css={tw`text-center my-2 xl:text-left subpixel-antialiased`}
            style={{ color: '#B4EBCA' }}>{children}</Heading>
            <Heading {...headingProps(2)}
            css={tw`text-center my-2 xl:text-left absolute subpixel-antialiased`}
            style={{ color: '#463E43', top: 0, left: 0, right: 0, bottom: 0 }}>{children}</Heading>
        </Flex>
    )
}

export default memo(InteractiveHeading)