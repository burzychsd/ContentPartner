// DEPENDENCIES
import React from 'react'
import LazyLoad from 'react-lazy-load'
import { useSpring, animated } from 'react-spring'
import PropTypes from 'prop-types'

// COMPONENTS
import { Img } from '../../atoms/Vector'

const AnimatedImg = animated(Img)

const LazyLoader = (props) => {

    const { src, alt, style, onClick, className, onLoad, loaded } = props

    const img = useSpring({ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20, config: { mass: 1, tension: 280, friction: 20 } })

    const imgProps = {
        src,
        alt,
        onLoad,
        onClick,
        style: { ...style, opacity: img.opacity, 
                 transform: img.y.interpolate(y => `translateY(${y}%)`)}
    }

    return (
        <LazyLoad className={className} once height='100%' offsetTop={100} debounce={false}>
            <AnimatedImg {...imgProps} />
        </LazyLoad>
    )

}

LazyLoader.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    style: PropTypes.object,
    containerClassName: PropTypes.string,
    onClick: PropTypes.func,
    onLoad: PropTypes.func.isRequired,
    loaded: PropTypes.bool.isRequired
}

export default LazyLoader