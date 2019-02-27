const baseline = 24

export const Sm = (base) => `calc(${base ? base : baseline}px / 2)`
export const Md = (base) => `${base ? base : baseline}px`
export const Lg = (base) => `calc(${base ? base : baseline}px * 2)`
export const Xl = (base) => `calc(${base ? base : baseline}px * 3)`