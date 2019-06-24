// DEPENDENCIES
import React, { memo } from 'react'
import { StaticQuery, graphql } from 'gatsby'

// COMPONENTS
import Page from './../../templates/Page'
import BlogCards from '../../molecules/BlogCards'
import Pagination from './../../molecules/Pagination'

const Blog = props => {

    const { style, pageContext, location, minHeight } = props

    return (
        <StaticQuery
        query={graphql`
        query {
            posts: allContentfulBlogPost(sort: {order: DESC, fields: createdAt}) {
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
        `}
        render={data => (
          <Page footer style={style} minHeight={minHeight}>
            <BlogCards data={data.posts.edges} />
            <Pagination location={location} pageContext={pageContext} />
          </Page>
        )} />
    )
}

export default memo(Blog)