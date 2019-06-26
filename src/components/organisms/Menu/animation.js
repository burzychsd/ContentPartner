import { useSpring, useTrail } from 'react-spring'

export const menuAnimation = (ref, toggle) => useSpring({
    config: { mass: 1, tension: 210, friction: 20 },
    opacity: toggle ? 1 : 0,
    ref
    })

export const trailLinks = (ref, toggle, links) => useTrail(links.length, {
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    ref,
    from: { opacity: 0, x: 20 },
    config: { mass: 1, tension: 210, friction: 20 }
})