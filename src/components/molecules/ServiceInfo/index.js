// DEPENDENCIES
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import { navigate } from 'gatsby'

// COMPONENTS
import Text from './../../atoms/Text'
import { H1 as Heading } from './../../atoms/Heading'
import Modal from './../Modal'

const ServiceInfo = props => {

    const { isActive, handleClick, content } = props

    const titleProps = {
        className: 'heading',
        style: { textAlign: 'center', margin: '4rem 0 2rem 0' }
    }

    const textProps = {
        className: 'text',
    }

    const listItems = content.content.listItems.map(item => 
        <li key={shortid.generate()} css={tw`font-body font-light my-1 text-dark_puce`} {...textProps}>{`- ${item}`}</li>
    )

    return (
        <Modal isActive={isActive} handleClick={e => handleClick({
            articles: false,
            ecommerce: false,
            website: false,
            socialMedia: false,
            ebook: false,
            cooperation: false
        })}>
            <Heading {...titleProps}>{content.title}</Heading>
            <Text css={tw`font-light my-4 px-2`} {...textProps}>{content.content.paragraph01}</Text>
            <Text css={tw`font-light my-4 px-2`} {...textProps}>{content.content.paragraph02}</Text>
            <Text css={tw`font-bold my-4 px-2`} {...textProps}>{content.content.listTitle}</Text>
            <ul css={tw`flex flex-col`} style={{ listStyle: 'none' }}>
                {listItems}
            </ul>
            <Text css={tw`font-light my-8 px-2`} {...textProps}><span onClick={e => navigate('/kontakt/')} css={tw`font-bold`}>Napisz lub zadzwoń</span>{` - ${content.content.paragraph03}`}</Text>
        </Modal>
    )
}

ServiceInfo.propTypes = {
    isActive: PropTypes.bool,
    handleClick: PropTypes.func.isRequired,
    content: PropTypes.object.isRequired
}

export default memo(ServiceInfo)