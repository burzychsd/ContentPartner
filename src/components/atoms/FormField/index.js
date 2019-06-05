// DEPENDENCIES
import styled from 'styled-components'

const FormField = styled.input`
    ${props => props.reset ? null : tw`h-12 shadow-md appearance-none border-none rounded w-4/5 max-w-xs my-3 py-3 px-3 font-body text-dark_puce leading-tight focus:outline-none focus:shadow-outline`};
`

export default FormField