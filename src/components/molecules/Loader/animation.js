import { useTransition, useSpring } from 'react-spring'

export const loaderAnimation = (animate, ref, enter) => useTransition(animate, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { mass: 1, tension: 120, friction: 14 },
    ref
})

export const containerAnimation = (animate, ref) => useSpring({ opacity: animate ? 1 : 0, ref })