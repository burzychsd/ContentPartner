import { useTrail } from 'react-spring'

export const titleAnimation = (letters, status, ref) => useTrail(letters.length, {
    opacity: status ? 1 : 0,
    ref: ref ? ref : null,
    from: { opacity: 0 },
    config: { mass: 1, tension: letters.length * 50, friction: 80 },
    delay: 600
})