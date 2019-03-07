// DEPENDENCIES
import styled from 'styled-components'

// STYLED_SYSTEM
import { Flex } from './../../../design_system/flexbox'

// STYLED_COMPONENTS
export const Wrapper = styled(Flex)`
    width: 100%;
    min-height: ${props => props.minHeight || null}px;
    max-height: ${props => props.maxHeight|| null}px;
    height: ${props => props.height || null};
    flex-flow: column nowrap;
    justify-content: space-between;
    padding: 0.5em 0 1em 0;
    margin: ${props => props.margin || '0 auto'};
    transition: all 0.3s cubic-bezier(.17,.67,.83,.67);
`