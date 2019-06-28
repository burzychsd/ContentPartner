// DEPENDENCIES
import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import loadable from '@loadable/component'

// COMPONENTS
import Page from '../components/templates/Page'
const AboutContent = loadable(() => import('../components/organisms/AboutContent'))

const O_Mnie = ({ style, minHeight, status }) => {

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
            <Page footer style={style} minHeight={minHeight} status={status}>
                <AboutContent data={data} />
            </Page>
        )} />
    )
}

export default O_Mnie