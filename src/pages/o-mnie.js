// DEPENDENCIES
import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

// COMPONENTS
import Page from '../components/templates/Page'
import AboutContent from '../components/organisms/AboutContent'

const O_Mnie = ({ style, minHeight }) => {

    const textProps = {
        className: `text`
    }

    return (
        <StaticQuery query={
            graphql`
            query {
                imageTwo: file(relativePath: { eq: "franky_about.jpg" }) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    # Makes it trivial to update as your page's design changes.
                    fluid(maxHeight: 1361) {
                        ...GatsbyImageSharpFluid
                    }
                }
                }
            }
            `
        }
        render={data => (
            <Page footer style={style} minHeight={minHeight}>
                <AboutContent data={data} />
            </Page>
        )} />
    )
}

export default O_Mnie