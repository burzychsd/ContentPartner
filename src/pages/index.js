// DEPENDENCIES
import React from 'react'

// COMPONENTS
import Page from '../components/templates/Page'
import Flex from '../components/atoms/Flex'
import HomeContent from '../components/organisms/HomeContent'

const IndexPage = ({ style }) => {

    return (
        <Page style={style}>
            <HomeContent />
        </Page>
    )
}

export default IndexPage
