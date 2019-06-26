import { useSpring } from 'react-spring'

export const fadeIn = (status, ref, transform, noDelay) => useSpring({ opacity: status ? 1 : 0, transform: status ? (transform ? transform.enter : `translateY(0)`) : (transform ? transform.initial : `translateY(10px)`), ref: ref ? ref : null, config: { mass: 1, tension: 210, friction: 20 }, delay: noDelay ? null : 1000 })