// DEPENDENCIES
import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import loadable from '@loadable/component'

// COMPONENTS
import SEO from './../components/templates/SEO'
const HomeContent = loadable(() => import('../components/organisms/HomeContent'))

const IndexPage = () => {

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
            <>
                <SEO title='Strona główna' keywords={[]} />
                <HomeContent data={data} />
            </>
        )}/>
    )
}

export default IndexPage