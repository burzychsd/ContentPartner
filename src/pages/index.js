// DEPENDENCIES
import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

// COMPONENTS
import Page from '../components/templates/Page'
import Flex from '../components/atoms/Flex'
import HomeContent from '../components/organisms/HomeContent'

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