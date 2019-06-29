// DEPENDENCIES
import React, { memo } from 'react'
import { graphql } from 'gatsby'

// COMPONENTS
import BlogCards from './../../molecules/BlogCards'
import Pagination from './../../molecules/Pagination'

const Blog = props => {

    const { data, pageContext, location } = props

    return (
      <>
        <BlogCards data={data.posts.edges} />
        <Pagination location={location} pageContext={pageContext} />
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