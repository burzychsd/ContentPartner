// DEPENDENCIES
import React, { memo, useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import shortid from 'shortid'

// COMPONENTS
import Page from './../../templates/Page'
import BlogCard from './../../molecules/BlogCard'
import Pagination from './../../molecules/Pagination'

const Blog = props => {

    const { style, pageContext, data, location, minHeight } = props

    const [posts, setPosts] = useState(null)

    useEffect(() => {
      setPosts(data.posts)
    }, location.pathname.includes('blog') && typeof data !== 'undefined' ? [pageContext.currentPage] : [])

    return (
        <Page footer style={style} minHeight={minHeight}>
            {posts && posts.edges.map(edge => <BlogCard key={shortid.generate()} data={edge.node} />)}
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
          }
        }
    }
}
`

export default memo(Blog)