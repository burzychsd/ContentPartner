// DEPENDENCIES
import React, { memo } from 'react'
import shortid from 'shortid'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Facebook from './../../../images/svg/facebook.svg'
import Instagram from './../../../images/svg/instagram.svg'
import Twitter from './../../../images/svg/twitter.svg'
import Linkedin from './../../../images/svg/linkedin.svg'

const SocialMedia = props => {

    const links = [
        'https://www.facebook.com/fanpage.contentpartner/',
        'https://twitter.com/_contentpartner',
        'https://www.linkedin.com/company/20314231/'
    ]

    const iconProps = {
        style: { height: 32, margin: '0 0.25rem' }
    }

    const icons = links.map((link, i) => 
        <a key={shortid.generate()} href={link} target='_blank' rel='noopener noreferrer'>
            {
                i === 0 ? <Facebook {...iconProps} /> :
                i === 1 ? <Twitter {...iconProps} /> :
                <Linkedin {...iconProps} />
            }
        </a>
    )

    return (
        <Flex reset css={tw`pt-3`}>
            {icons}
        </Flex>
    )
}

export default memo(SocialMedia)