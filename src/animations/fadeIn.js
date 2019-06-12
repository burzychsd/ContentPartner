import { useSpring } from 'react-spring'

export const fadeIn = (status, ref) => useSpring({ opacity: status ? 1 : 0, transform: status ? `translateY(0)` : `translateY(10px)`, ref: ref ? ref : null, config: { mass: 1, tension: 60, friction: 12 }, delay: 1000 })