// DEPENDENCIES
import styled from 'styled-components'

const defaultStyles = { ...tw`font-heading text-dark_puce leading-normal mx-4` }

const H1 = styled.h1`
    ${props => props.reset ? null : defaultStyles + 'text-3xl'};
`
const H2 = styled.h2`
    ${props => props.reset ? null : defaultStyles + 'text-2xl'};
`
const H3 = styled.h3`
    ${props => props.reset ? null : defaultStyles + 'text-xl'};
`
const H4 = styled.h4`
    ${props => props.reset ? null : defaultStyles + 'text-lg'};
`
const H5 = styled.h5`
    ${props => props.reset ? null : defaultStyles + 'text-base'};
`

export {
    H1,
    H2,
    H3,
    H4,
    H5
}