// DEPENDENCIES
import React, { Fragment } from 'react'

// COMPONENTS
import SEO from '../components/templates/SEO'
import Section from '../components/molecules/Section'
import HomeContent from '../components/organisms/HomeContent'


const IndexPage = () => (
    <Fragment>
        <SEO title="Home" keywords={[`website`, `personal`, `blog`]} />
        <Section sectionCss={tw`w-full flex-col items-center xl:items-start`} style={{ maxWidth: 960, height: '100%', margin: '0 auto' }}>
            <HomeContent />
        </Section>
    </Fragment>
)

export default IndexPage
