// DEPENDENCIES
import React, { Fragment } from 'react'

// COMPONENTS
import { Wrapper } from './styled'
import BackgroundNum from './../../atoms/BackgroundNum'
import Graphic1 from './../../../images/graphic1.svg'
import Graphic2 from './../../../images/graphic2.svg'
import Graphic3 from './../../../images/graphic3.svg'
import Graphic4 from './../../../images/graphic4.svg'
import Graphic5 from './../../../images/graphic5.svg'

const Graphic = ({ status, styles, side, left, right }) => (
    <Wrapper side={side}>
        {status === 1 && <Fragment><Graphic1 {...styles} /><BackgroundNum number={1} left={left} /></Fragment>}
        {status === 2 && <Fragment><Graphic2 {...styles} /><BackgroundNum number={2} right={right} /></Fragment>}
        {status === 3 && <Fragment><Graphic3 {...styles} /><BackgroundNum number={3} left={left} /></Fragment>}
        {status === 4 && <Fragment><Graphic4 {...styles} /><BackgroundNum number={4} right={right} /></Fragment>}
        {status === 5 && <Fragment><Graphic5 {...styles} /><BackgroundNum number={5} left={left} /></Fragment>}
    </Wrapper>
)

export default Graphic