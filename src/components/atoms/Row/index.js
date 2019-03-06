// DEPENDENCIES
import React, { Fragment } from 'react'
import shortid from 'shortid'

// STYLED_SYSTEM
import { Accent } from './../../../design_system/colors'

const rowMap = Array.from({length: 20}, (v, k) => k+1)

const Row = (props) => {

    const row = rowMap.map((el, i) => 
        <div key={shortid.generate()} ref={props[`grid_item${props.top + 1}-${i + 1}`]} id={`grid_item${props.top + 1}-${i + 1}`} style={{ 
            position: 'absolute', 
            width: '5%', height: '10%', 
            background: `${props.color ? props.color : Accent}`,
            top: `${props.top * 10}%`, 
            left: `${i * 5}%`, zIndex: -2, opacity: 0 }}></div>
    )
    
    return (
        <Fragment>
            {row}
        </Fragment>
    )
}

export default Row