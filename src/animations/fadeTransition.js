import { useTransition } from 'react-spring'

export const fadeTransition = (status, ref) => useTransition(status, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { mass: 1, tension: 210, friction: 20 },
    ref
})