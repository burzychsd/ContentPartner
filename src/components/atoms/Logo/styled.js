// DEPENDENCIES
import styled from 'styled-components'

// STYLED_SYSTEM
import { Lg } from './../../../design_system/breakpoints'
import { Flex } from './../../../design_system/flexbox'

// STYLED_COMPONENTS
export const FlexDiv = styled(Flex)`
    position: relative;
    width: ${props => props.width || '64px'};
    height: ${props => props.height || '64px'};
    justify-content: center;
    cursor: pointer;
    z-index: 999;

    @media (min-width: ${Lg}px) {
        &:hover > a > svg > g > #light {
            opacity: 1;
            transition: all 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
`