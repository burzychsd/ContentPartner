// DEPENDENCIES
import styled from 'styled-components'

// STYLED_SYSTEM
import { Flex } from './../../../design_system/flexbox'

// STYLED_COMPONENTS
export const MenuContainer = styled(Flex)`
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1140px;
    padding: 2rem 5rem;
    top: 50px;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 997;
`

export const ListContainer = styled(Flex)`
    width: 100%;
    flex-flow: ${props => props.direction || 'column nowrap'};
    transition: opacity 0.55s cubic-bezier(0.86, 0, 0.07, 1);
`

export const ListItem = styled.li`
    margin: ${props => props.margin || '0.3em auto'};
    text-align: center;

    &:first-child {
        margin: ${props => props.margin || '0.6em 0 0.3em 0'};
    }

    &:last-child {
        margin: ${props => props.margin || '0.3em 0 0.6em 0'};
    }
`