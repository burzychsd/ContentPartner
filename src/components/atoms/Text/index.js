// DEPENDENCIES
import styled from 'styled-components'

const Text = styled.p`
    ${props => props.reset ? null : tw`font-body text-dark_puce`};
`

export default Text