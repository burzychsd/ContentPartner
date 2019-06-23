// DEPENDENCIES
import React, { memo } from 'react'
import { graphql } from 'gatsby'
import shortid from 'shortid'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Page from './../../templates/Page'

const Blog = props => {

    const { style, minHeight, pageContext, data } = props

    console.log(pageContext)

    return (
        <Page footer style={style} minHeight={minHeight}>
            <Flex>

            </Flex>
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