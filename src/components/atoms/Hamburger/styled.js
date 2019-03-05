// DEPENDENCIES
import styled from 'styled-components'

// STYLED_SYSTEM
import { Primary, Accent } from './../../../design_system/colors'
import { Lg } from './../../../design_system/breakpoints'

// STYLED_COMPONENTS
export const FlexDiv = styled.div`
    position: relative;
    width: ${props => props.width || '64px'};
    height: ${props => props.height || '64px'};
    cursor: pointer;
    z-index: 999;

    &:before {
        content: '';
        width: 75%;
        height: 75%;
        position: absolute;
        top: 12.5%;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 50%;
        background: ${Accent};
        margin: 0 auto;
        transform: scale(0);
        transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    @media (min-width: ${Lg}px) {
        &:hover:before {
            transform: scale(1);
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
    }
`

export const Bar = styled.div`
    position: absolute;
    width: 32px;
    height: 1px;
    background: ${Primary};
    ${props => props.top ? `top: ${props.top}px` : null};
    right: 0;
    ${props => props.bottom ? `bottom: ${props.bottom}px` : null};
    left: 0;
    margin: 0 auto;
`