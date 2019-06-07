import { useSpring } from 'react-spring'

export const hamburgerAnimation = (refs, toggle) => {
    const animate = {}
    const opacityCss = (hidden) => ({ opacity: toggle ? hidden ? 1 : 0 : hidden ? 0 : 1 })
    const transformCss = (first) => (
        {transform: `rotate(${toggle ? first ? '-45deg' : '45deg' : '0deg'})`}
    )

    const styles = (index, ref) => {
        const opacity = opacityCss(index > 2)
        const transform = transformCss(index === 3 ? true : false)
        return index <= 2 ? 
        useSpring({ ...opacity, ref }) : useSpring({ ...opacity, ...transform, ref })
    }

    refs.forEach((ref, i) => 
        animate[`style${i + 1}`] = styles(i + 1, ref)
    )

    return animate
}