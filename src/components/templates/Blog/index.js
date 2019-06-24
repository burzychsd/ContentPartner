// DEPENDENCIES
import React, { memo } from 'react'
import { graphql } from 'gatsby'

// COMPONENTS
import Page from './../../templates/Page'
import BlogCards from '../../molecules/BlogCards'
import Pagination from './../../molecules/Pagination'

const Blog = props => {

    const { style, data, pageContext, location, minHeight } = props

    return (
      <Page footer style={style} minHeight={minHeight}>
        <BlogCards data={data.posts.edges} />
        <Pagination location={location} pageContext={pageContext} />
      </Page>
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