// DEPENDENCIES
import React, { PureComponent, Fragment } from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// COMPONENTS
import Row from './../../atoms/Row'
import { Overlay } from './styled'

// GRAPHQL (QUERY)
const query = graphql`
        query {
            Image1: file(relativePath: { eq: "png/bulb-background.png" }) {
            childImageSharp {
                sizes(maxWidth: 1140) {
                    ...GatsbyImageSharpSizes
                }
            }
            }
        }
        `

const Image = () => (
    <StaticQuery
        query={query}
        render={data => <Img sizes={data.Image1.childImageSharp.sizes} />}
    />
)

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