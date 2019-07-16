// DEPENDENCIES
import React, { memo } from 'react'
import { graphql } from 'gatsby'
import loadable from '@loadable/component'

// COMPONENTS
import SEO from './../../templates/SEO'
const BlogCards = loadable(() => import(/* webpackPrefetch: true */ './../../molecules/BlogCards'))
const Pagination = loadable(() => import(/* webpackPrefetch: true */ './../../molecules/Pagination'))

const Blog = props => {

    const { data, pageContext, location } = props

    return (
      <>
        <SEO title='Blog' description='Blog o copywritingu, content marketingu i pisaniu.' />
        <BlogCards data={data.posts.edges} />
        {pageContext.numPages > 10 && <Pagination location={location} pageContext={pageContext} />}
      </>
    )
}

export const pageQuery = graphql`
query($skip: Int!, $limit: Int!) {
    posts: allContentfulBlogPost(sort: {order: DESC, fields: createdAt}, skip: $skip, limit: $limit) {
        edges {
          node {
            slug
            postTitle
            shortDescription
            postPic {
              file {
                url,
                fileName
              }
            }
            createdAt(locale: "")
          }
        }
    }
}
`

export default memo(Blog)