// DEPENDENCIES
import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import loadable from '@loadable/component'

// COMPONENTS
import Page from '../components/templates/Page'
const HomeContent = loadable(() => import('../components/organisms/HomeContent'))

const IndexPage = ({ style, minHeight }) => {

    return (
        <StaticQuery query={
            graphql`
            query {
                imageOne: file(relativePath: { eq: "franky_without_bg.jpg" }) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    # Makes it trivial to update as your page's design changes.
                    fluid(maxHeight: 1200) {
                        ...GatsbyImageSharpFluid
                    }
                }
                }
            }
            `
        }
        render={data => (
            <Page style={style} minHeight={minHeight}>
                <HomeContent data={data} />
            </Page>
        )}/>
    )
}

export default IndexPage