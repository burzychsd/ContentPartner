import React, { Component } from 'react'
import { navigate } from 'gatsby-link'
import styled from 'styled-components'
import { fontPrimary, fluid } from './../../../design_system/typography'
import { Lg } from './../../../design_system/breakpoints'
import { Primary, Gray4 } from './../../../design_system/colors'

const NavLink = styled.a`
    ${props => props.customStyles || 
        `
            position: relative;
            font-family: ${fontPrimary};
            font-size: ${fluid(20, 24, 320, Lg)};
            font-weight: 300;
            text-align: center;
            margin: ${props => props.margin || '0.3em 0'};
            padding: 5px 0;
            cursor: pointer;

            &:after {
                content: '';
                width: 0%;
                position: absolute;
                bottom: 0;
                left: 0;
                border-bottom: 1px solid ${Gray4};
                transition: width 0.4s cubic-bezier(0.86, 0, 0.07, 1);
            }

            &:hover:after {
                width: 100%;
                transition: width 0.4s cubic-bezier(0.86, 0, 0.07, 1);
            }
        `
    }
`

class Link extends Component {

    handleClick = () => {
        if (this.props.clicked) { this.props.clicked() }
        setTimeout(() => navigate(this.props.to), this.props.delay)
    }

    isCurrent = () => {
        if (this.props.location) {
            return this.props.location.pathname === this.props.to
        } else {
            return false
        }
    }

    render() {
        return (
            <NavLink onClick={this.handleClick} customStyles={this.props.customStyles} style={{ color: `${ this.isCurrent() ? Gray4 : Primary }` }}>{this.props.children}</NavLink>
        )
    }
}

export default Link