// DEPENDENCIES
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavLink = styled(Link)`
    ${props => props.reset ? null : props.mobile ? tw`no-underline font-heading font-bold text-dark_puce` : tw`relative mx-3 no-underline font-heading text-2xl lg:inline-block text-dark_puce`};
`

export default NavLink