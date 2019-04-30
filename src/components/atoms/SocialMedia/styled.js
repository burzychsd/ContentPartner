// DEPENDENCIES
import styled from 'styled-components'

// STYLED_SYSTEM
import { Flex } from './../../../design_system/flexbox'

// STYLED_COMPONENTS
export const Wrapper = styled(Flex)`
    position: absolute;
    bottom: 0.5em;
    right: 1em;
    width: 30%;
    max-width: 130px;
    height: auto;
    height: ${props => props.height || null};
    justify-content: space-around;
    align-items: center;
`