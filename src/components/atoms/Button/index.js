// DEPENDENCIES
import styled from 'styled-components'

const Button = styled.button`
    ${props => props.reset ? null : tw`border-none cursor-pointer font-bold py-2 px-4 rounded`};
    ${props => props.success ? tw`bg-green text-ghost_white hover:bg-blue`
             : props.alert ? tw`bg-yellow text-dark_puce hover:bg-blue hover:text-ghost_white`
             : props.error ? tw`bg-red text-ghost_white hover:bg-blue`
             : tw`bg-blue text-ghost_white hover:bg-green`}
`

export default Button