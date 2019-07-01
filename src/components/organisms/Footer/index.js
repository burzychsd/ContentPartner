// DEPENDENCIES
import React, { memo } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Text from './../../atoms/Text'

const footerTextClasses = { ...tw`no-underline font-body font-normal text-white text-sm sm:text-base mx-2` }

const FooterLink = styled(Link)`
${footerTextClasses}
`

const Footer = React.forwardRef((props, innerRef) => {

    const { setShowModal } = props

    const handleClick = link => {
        link === 'FAQ' ? setShowModal({ modal: true, faq: true, cookies: false }) :
                         setShowModal({ modal: true, faq: false, cookies: true })
    }

    return (
        <Flex as='footer' ref={innerRef ? innerRef : null} reset css={tw`bg-dark_puce w-full`} style={{ ...props.style }}>
            <Flex className='footer_container' reset css={tw`w-full h-full justify-between items-center px-8 mx-auto`} style={{ maxWidth: 1280 }}>
                <Flex reset className='footer_links'>
                    <Text css={footerTextClasses} style={{ cursor: 'pointer' }} onClick={() => handleClick('FAQ')}>FAQ</Text>
                    <Text css={footerTextClasses} style={{ cursor: 'pointer' }} onClick={() => handleClick('Cookies')}>Prywatność</Text>
                    <FooterLink to='/kontakt/'>Kontakt</FooterLink>
                </Flex>
                <Text className='footer_copyright' css={footerTextClasses}>&copy;{` ${new Date().getFullYear()} Content Partner`}</Text>
            </Flex>
        </Flex>
    )
})

export default memo(Footer)