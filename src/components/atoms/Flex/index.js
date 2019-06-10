// DEPENDENCIES
import styled from 'styled-components'

const Flex = styled.div`
    ${props => props.reset ? tw`flex` : props.noneStyles ? null : tw`w-full flex flex-col items-center`};
`

export default Flex