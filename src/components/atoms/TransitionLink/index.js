import React from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'
import styled from 'styled-components'
import { fontPrimary, fluid } from './../../../design_system/typography'
import { Lg } from './../../../design_system/breakpoints'
import { Primary, Gray4 } from './../../../design_system/colors'

const NavLink = styled(TransitionLink)`
    position: relative;
    font-family: ${fontPrimary};
    font-size: ${fluid(20, 24, 320, Lg)};
    font-weight: 300;
    color: ${Primary};

    &:after {
        content: '';
        width: 0%;
        position: absolute;
        bottom: 0;
        left: 0.2em;
        border-bottom: 1px solid ${Primary};
        transition: width 0.4s cubic-bezier(0.86, 0, 0.07, 1);
    }

    &:hover:after {
        width: 90%;
        transition: width 0.4s cubic-bezier(0.86, 0, 0.07, 1);
    }
`

const Link = ({ to, children }) => (
    <NavLink to={to} activeStyle={{ color: `${Gray4}` }}>{children}</NavLink>
)

export default Link

