// DEPENDENCIES
import React from 'react'
import PropTypes from 'prop-types'

// COMPONENTS
import Flex from './../../atoms/Flex'

const Section = (props) => {

    const { sectionCss, style, children, innerRef } = props

    const sectionProps = {
        as: `section`,
        reset: true,
        style
    }

    return (
        <Flex css={sectionCss} {...sectionProps}>
            {children}
        </Flex>
    )
}

Section.propTypes = {
    sectionCss: PropTypes.object,
    style: PropTypes.object,
    children: PropTypes.node.isRequired
}

export default Section