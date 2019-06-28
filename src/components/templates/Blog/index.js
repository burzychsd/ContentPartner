// DEPENDENCIES
import React, { memo, useEffect, useState } from 'react'
import { graphql } from 'gatsby'

// COMPONENTS
import Page from './../../templates/Page'
import BlogCards from './../../molecules/BlogCards'
import Pagination from './../../molecules/Pagination'

const Blog = props => {

    const { style, data, pageContext, location, minHeight, status } = props

    const [blog, setBlogContext] = useState(null)
    const [blogData, setBlogData] = useState(null)

    useEffect(() => {
      location.pathname.includes('blog/') ? setBlogState(pageContext, data) : null
    }, [location.pathname])

    const setBlogState = (pageContext, data) => {
      setBlogContext(pageContext)
      setTimeout(() => setBlogData(data), 300)
    }

    return (
      <Page footer={status ? true : false} style={style} minHeight={minHeight} status={status}>
        {
          blog && blogData ?
          <>
            <BlogCards data={blogData.posts.edges} />
            <Pagination location={location} pageContext={blog} />
          </> : null
        }
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