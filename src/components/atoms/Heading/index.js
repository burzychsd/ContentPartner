// DEPENDENCIES
import styled from 'styled-components'

const defaultStyles = {...tw`font-heading text-dark_puce leading-normal antialiased px-2`}

const H1 = styled.h1`
    ${props => props.reset ? null : defaultStyles};
`
const H2 = styled.h2`
    ${props => props.reset ? null : defaultStyles};
`
const H3 = styled.h3`
    ${props => props.reset ? null : defaultStyles};
`
const H4 = styled.h4`
    ${props => props.reset ? null : defaultStyles};
`
const H5 = styled.h5`
    ${props => props.reset ? null : defaultStyles};
`

export {
    H1,
    H2,
    H3,
    H4,
    H5
}