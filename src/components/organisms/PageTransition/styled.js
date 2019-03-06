// DEPENDENCIES
import styled from 'styled-components'

// STYLED_SYSTEM
import { Flex } from './../../../design_system/flexbox'
import { Accent } from './../../../design_system/colors'

// STYLED_COMPONENTS
export const PageTransition = styled(Flex)`
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    opacity: 0;

    background: ${Accent};
    transition: all 0.2s cubic-bezier(0.19, 1, 0.22, 1);
`