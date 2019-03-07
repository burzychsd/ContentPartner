// DEPENDENCIES
import React, { Fragment } from 'react'

// COMPONENTS
import Num01 from './../../../images/Num_01.svg'
import Num02 from './../../../images/Num_02.svg'
import Num03 from './../../../images/Num_03.svg'
import Num04 from './../../../images/Num_04.svg'
import Num05 from './../../../images/Num_05.svg'

const numStyles = {
    position: 'absolute',
    height: '40%',
    bottom: 0,
    zIndex: -2,
}

const BackgroundNum = ({ number, left, right }) => (
    <Fragment>
        {number === 1 && <Num01 style={{...numStyles, left: `${left}`}} />}
        {number === 2 && <Num02 style={{...numStyles, right: `${right}`}} />}
        {number === 3 && <Num03 style={{...numStyles, left: `${left}`}} />}
        {number === 4 && <Num04 style={{...numStyles, right: `${right}`}} />}
        {number === 5 && <Num05 style={{...numStyles, left: `${left}`}} />}
    </Fragment>
)

export default BackgroundNum