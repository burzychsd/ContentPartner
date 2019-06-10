import { useTransition, useSpring } from 'react-spring'

export const loaderAnimation = (animate, ref) => useTransition(animate, null, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    ref: ref ? ref : null
})

export const containerAnimation = (animate, ref) => useSpring({ opacity: animate ? 1 : 0, ref })