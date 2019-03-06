// DEPENDENCIES
import styled from 'styled-components'

// STYLED_SYSTEM
import { Flex } from './../../../design_system/flexbox'

// STYLED_COMPONENTS
export const HeaderContainer = styled(Flex)`
    position: absolute;
    width: 100%;
    max-width: 1140px;
    height: 100px;
    padding: 15px 1.5em 0 1.5em;
    justify-content: space-between;

    align-items: center;
    z-index: 1000;

    @media (min-width: 1140px) {
        padding: 0;
    }
`