// FONT
export const fontPrimary = '"Raleway", sans-serif'
export const fontSecondary = 'serif'

// LINE-HEIGHT
export const headingLineHeight = 1.2
export const bodyLineHeight = 1.4

// SIZES
export const baseSize = '1em'
export const scaleRatio = 1.2

export const textXs = (size=baseSize, ratio=scaleRatio) => `calc(${size} / ${ratio} * ${ratio})`
export const textSm = (size=baseSize, ratio=scaleRatio) => `calc(${size} / ${ratio})`
export const textMd = (size=baseSize, ratio=scaleRatio) => `calc(${size} * ${ratio})`
export const textLg = (size=baseSize, ratio=scaleRatio) => `calc(${size} * ${ratio} * ${ratio})`
export const textXl = (size=baseSize, ratio=scaleRatio) => `calc(${size} * ${ratio} * ${ratio} * ${ratio})`
export const textXxl = (size=baseSize, ratio=scaleRatio) => `calc(${size} * ${ratio} * ${ratio} * ${ratio} * ${ratio})`
export const textXxxl = (size=baseSize, ratio=scaleRatio) => `calc(${size} * ${ratio} * ${ratio} * ${ratio} * ${ratio} * ${ratio})`

// FLUID TYPOGRAPHY
export const fluid = (min, max, vmin, vmax) => `calc(${min}px + (${max} - ${min}) * ((100vw - ${vmin}px) / (${vmax} - ${vmin})))`