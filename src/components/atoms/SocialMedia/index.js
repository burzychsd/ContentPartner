// DEPENDENCIES
import React from 'react'
import shortid from 'shortid'

// STYLES
import { Wrapper } from './styled'

// DATA
import { data } from './data'

// IMAGES
import Facebook from './../../../images/facebook.svg'
import Twitter from './../../../images/twitter.svg'
import Linkedin from './../../../images/linkedin.svg'
import Instagram from './../../../images/instagram.svg'

const SocialMedia = () => {

    const socialMedia = data.map((social, i) => 
        <div key={shortid.generate()} style={{ width: 'auto', height: 28 }}>
            <a href={social} target='_blank' rel='noopener noreferrer'>{
                i === 0 ? <Facebook style={{ height: '1.2em' }} /> : i=== 1 ? <Twitter style={{ height: '1.2em' }} /> : i === 2 ? <Linkedin style={{ height: '1.2em' }} /> : <Instagram style={{ height: '1.2em' }} />
            }</a>
        </div>
    )

    return (
        <Wrapper>
            {socialMedia}
        </Wrapper>
    )
}

export default SocialMedia