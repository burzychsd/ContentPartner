// DEPENDENCIES
import styled from 'styled-components'

const Button = styled.button`
    ${props => props.reset ? props.noneStyles ? null : tw`border-none cursor-pointer font-bold font-heading text-dark_puce` : tw`border-none cursor-pointer font-bold font-body py-2 rounded`};
    ${props => props.success ? tw`bg-green text-ghost_white hover:bg-blue`
             : props.alert ? tw`bg-yellow text-dark_puce hover:bg-blue hover:text-ghost_white`
             : props.error ? tw`bg-red text-ghost_white hover:bg-blue`
             : null}
`

export default Button