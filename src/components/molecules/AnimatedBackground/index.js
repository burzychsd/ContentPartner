import React, { PureComponent, Fragment } from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import { Accent } from './../../../design_system/colors'
import shortid from 'shortid'

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;

    opacity: 0;
`

const Image = () => (
    <StaticQuery
        query={graphql`
        query {
            Image1: file(relativePath: { eq: "png/bulb-background.png" }) {
            childImageSharp {
                sizes(maxWidth: 1140) {
                    ...GatsbyImageSharpSizes
                }
            }
            }
        }
        `}
        render={data => <Img sizes={data.Image1.childImageSharp.sizes} />}
    />
)

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
                {props.overlay && <Overlay ref={props.overlay}>
                    <Image />
                </Overlay>}
            </Fragment>
        )
    }
}

export default Background