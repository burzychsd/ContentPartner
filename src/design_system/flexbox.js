import styled from 'styled-components'

// =================
// FLEXBOX
// =================

// DISPLAY
const flexDisplay = 'display: flex'

// FLEX SHORTHAND
const flex  = (values='') => `flex: ${values}`

// FLEX DIRECTION AND WRAP
const flexFlow = (flow='') => `flex-flow: ${flow}`

// DISPLAY ORDER
const order = (val='') => `order: ${val}`

// FLEX GROW
const flexGrow = (grow='') => `flex-grow: ${grow}`

// FLEX SHRINK
const flexShrink = (shrink='') => `flex-shrink: ${shrink}`

// FLEX BASIS
const flexBasis = (width='') => `flex-basis: ${width}`

// AXIS ALIGNMENT (JUSTIFY CONTAINERS)
const justifyContent = (justify='') => `justify-content: ${justify}`

// AXIS ALIGNMENT (JUSTIFY ITEM)
const justifySelf = (justify='') => `justify-self: ${justify}`

// PACKING FLEX LINES
const alignContent = (align='') => `align-content: ${align}`

// CROSS-AXIS ALIGNMENT (ALIGN CONTAINERS)
const alignItems = (align='') => `align-items: ${align}`

// CROSS-AXIS ALIGNMENT (ALIGN ITEMS)
const alignSelf = (align='') => `align-self: ${align}`

// UNIVERSAL FLEX STYLES
export const Flex = styled.div`
    ${flexDisplay};
    ${props => props ? flexFlow(props.flow) : null};
    ${props => props ? justifyContent(props.justifyContent) : null};
    ${props => props ? justifySelf(props.justifySelf) : null};
    ${props => props ? alignContent(props.alignContent) : null};
    ${props => props ? alignItems(props.alignItems) : null};
    ${props => props ? alignSelf(props.alignSelf) : null};
    ${props => props ? flexGrow(props.flexGrow) : null};
    ${props => props ? flexShrink(props.flexShrink) : null};
    ${props => props ? flexBasis(props.flexBasis) : null};
    ${props => props ? order(props.order) : null};
    ${props => props ? flex(props.flex) : null};
`