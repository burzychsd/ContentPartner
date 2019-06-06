// DEPENDENCIES
import React, { Fragment } from 'react'
import { connect } from 'react-redux'

// COMPONENTS
import SEO from '../components/templates/SEO'
import HomeContent from '../components/organisms/HomeContent'

const IndexPage = ({ isWidth, orientation }) => (
    <Fragment>
        <SEO title="Home" keywords={[`website`, `personal`, `blog`]} />
        <HomeContent isWidth={isWidth} orientation={orientation} />
    </Fragment>
)

const mapStateToProps = state => ({
    isWidth: state.browser.is,
    orientation: state.browser.orientation
})

export default connect(mapStateToProps, null)(IndexPage)
