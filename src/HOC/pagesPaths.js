import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const pagesPaths = Component => props => (
    <StaticQuery
    query={
        graphql`
        query {
            allSitePage {
                edges {
                    node {
                        path
                    }
                }
            }
        }`
    } render={data => <Component data={data} /> } />
)

export default pagesPaths