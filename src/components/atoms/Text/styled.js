// DEPENDENCIES
import styled from 'styled-components'

// STYLED_SYSTEM
import { Primary } from './../../../design_system/colors'
import { fluid, fontPrimary  } from './../../../design_system/typography'
import { Lg } from './../../../design_system/breakpoints'

// STYLED_COMPONENTS
export const TextItem = styled.p`
    max-width: ${props => props.maxWidth || '768px'};
    width: ${props => props.width || '80%'};
    font-family: ${fontPrimary};
    color: ${Primary};
    font-size: ${props => fluid(props.fontMin, props.fontMax, 320, Lg) || fluid(20, 24, 320, Lg)};
    font-weight: ${props => props.fontWeight || '300'};
    line-height: ${props => props.lineHeight || '1.4em'};
    text-align: ${props => props.textAlign || 'center'};
    margin: ${props => props.margin || '0 auto'};
    padding: ${props => props.padding || '5px auto'};
`