import { useTrail } from 'react-spring'

export const titleAnimation = (letters, status, delay) => useTrail(letters.length, {
    opacity: status ? 1 : 0,
    from: { opacity: 0 },
    config: { mass: 1, tension: 600, friction: 30 },
    delay
})