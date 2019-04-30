// DEPENDENCIES
import styled from 'styled-components'

// STYLED_SYSTEM
import { Flex } from './../../../design_system/flexbox'

// STYLED_COMPONENTS
export const Wrapper = styled(Flex)`
    position: relative;
    max-height: 400px;
    width: 100%;
    height: 80%;
    ${props => props.side || null};
    z-index: -3;
`