// DEPENDENCIES
import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import loadable from '@loadable/component'

// COMPONENTS
import SEO from './../components/templates/SEO'
const AboutContent = loadable(() => import('../components/organisms/AboutContent'))

const O_Mnie = () => {

    return (
        <StaticQuery query={
            graphql`
            query {
                imageTwo: file(relativePath: { eq: "franky_about.jpg" }) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    # Makes it trivial to update as your page's design changes.
                    fluid(maxHeight: 1361) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
                }
            }
            `
        }
        render={data => (
            <>
                <SEO title='O mnie' description='Copywriter z Bydgoszczy – teksty na zamówienie.' />
                <AboutContent data={data} />
            </>
        )} />
    )
}

export default O_Mnie