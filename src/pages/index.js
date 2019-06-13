// DEPENDENCIES
import React from 'react'

// COMPONENTS
import Page from '../components/templates/Page'
import Flex from '../components/atoms/Flex'
import HomeContent from '../components/organisms/HomeContent'

const IndexPage = ({ style, minHeight }) => {

    return (
        <Page style={style} minHeight={minHeight}>
            <HomeContent />
        </Page>
    )
}

export default IndexPage
