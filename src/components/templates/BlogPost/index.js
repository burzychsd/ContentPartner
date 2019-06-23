// DEPENDENCIES
import React, { memo } from 'react'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Page from './../../templates/Page'

const BlogPost = props => {

    const { style, pageContext, data, minHeight } = props

    return (
        <Page footer style={style} minHeight={minHeight}>
            <Flex>
                <h1>Blog Post</h1>
            </Flex>
        </Page>

    )
}

export default memo(BlogPost)