// DEPENDENCIES
import React from 'react'

// COMPONENTS
import Bulb from './../../../images/Bulb.svg'
import Link from './../TransitionLink'
import { FlexDiv } from './styled'

const Logo = (props) => (
    <FlexDiv {...props}>
        <Link location={props.location} customStyles='height: 100%' to='/' delay={props.endTime} clicked={props.location.pathname !== '/' && props.status ? props.clicked : null} handleTransition={props.handleTransition}>
            <Bulb style={{ height: '100%' }} />
        </Link>
    </FlexDiv>
)

export default Logo