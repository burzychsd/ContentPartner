import React, { PureComponent, Fragment } from 'react'
import { Accent } from './../../../design_system/colors'
import shortid from 'shortid'

const rowMap = Array.from({length: 20}, (v, k) => k+1)

const Row = (props) => {

    const row = rowMap.map((el, i) => 
        <div ref={props[`grid_item${props.top + 1}-${i + 1}`]} id={`grid_item${props.top + 1}-${i + 1}`} key={shortid.generate()} style={{ 
            position: 'absolute', 
            width: '5%', height: '10%', 
            background: `${Accent}`, 
            top: `${props.top * 10}%`, 
            left: `${i * 5}%`, zIndex: -1, opacity: 0 }}></div>
    )
    
    return (
        <Fragment>
            {row}
        </Fragment>
    )
}

class Background extends PureComponent {
    render() {
        const { props } = this
        return (
            <Fragment>
                <div>
                    <Row top={0} {...props} />
                    <Row top={1} {...props} />
                    <Row top={2} {...props} />
                    <Row top={3} {...props} />
                    <Row top={4} {...props} />
                </div>
                <div>
                    <Row top={5} {...props} />
                    <Row top={6} {...props} />
                    <Row top={7} {...props} />
                    <Row top={8} {...props} />
                    <Row top={9} {...props} />
                </div>
            </Fragment>
        )
    }
}

export default Background