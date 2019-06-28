// DEPENDENCIES
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated } from 'react-spring'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Text from './../../atoms/Text'
import ServiceInfo from './../../molecules/ServiceInfo'
import Articles from './../../../images/svg/articles.svg'
import Ecommerce from './../../../images/svg/e-commerce.svg'
import Website from './../../../images/svg/www.svg'
import SocialMedia from './../../../images/svg/social.svg'
import Ebook from './../../../images/svg/e-book.svg'
import Cooperation from './../../../images/svg/cooperation.svg'

const AnimatedText = animated(Text)

// DATA
import { detailsInfo } from './detailsInfo'

const ServiceIcon = props => {

    const { title, handleClick, showInfo } = props

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const config = { mass: 1, tension: 210, friction: 20 }
    const setStyles = { opacity: mounted ? 1 : 0, transform: mounted ? 'translateX(0)' : 'translate(-20px)' }
    const spring = { from: { opacity: 0, transform: 'translateX(-20px)' } }

    const [titleAnimationStyle, setTitleAnimationStyle] = useSpring(() => ({...spring}))

    setTitleAnimationStyle({ ...setStyles, config, delay: 600 })

    const conditions = {
        articles: title === 'Artykuły tematyczne',
        ecommerce: title === 'Opisy produktów',
        website: title === 'Treści na strony www',
        socialMedia: title === 'Media społecznościowe',
        ebook: title === 'E-booki',
        cooperation: title === 'Kompleksowa współpraca'
    }

    const iconContainer = {
        reset: true,
        className: 'icon_container'
    }

    const iconProps = {
        preserveAspectRatio: `xMidYMid meet`,
        onClick: e => conditions.articles ? handleClick({ articles: true }) :
                      conditions.ecommerce ? handleClick({ ecommerce: true }) :
                      conditions.website ? handleClick({ website: true }) :
                      conditions.socialMedia ? handleClick({ socialMedia: true }) :
                      conditions.ebook ? handleClick({ ebook: true }) :
                      conditions.cooperation ? handleClick({ cooperation: true }) : null
    }

    const textProps = {
        className: 'text'
    }

    return (
        <Flex {...iconContainer} css={tw`flex-col items-center mt-8`}>
            <>
                {
                    conditions.articles ? <Articles {...iconProps} /> : 
                    conditions.ecommerce ? <Ecommerce {...iconProps} /> : 
                    conditions.website ? <Website {...iconProps} /> : 
                    conditions.socialMedia ? <SocialMedia {...iconProps} /> : 
                    conditions.ebook ? <Ebook {...iconProps} /> : 
                    conditions.cooperation ? <Cooperation {...iconProps} /> : null
                }
                <AnimatedText
                {...textProps}
                css={tw`mx-4 text-center`}
                style={titleAnimationStyle}>{title}</AnimatedText> 
            </>
            {
                conditions.articles ? <ServiceInfo handleClick={handleClick} isActive={showInfo.articles} content={detailsInfo.articles} /> : 
                conditions.ecommerce ? <ServiceInfo handleClick={handleClick} isActive={showInfo.ecommerce} content={detailsInfo.ecommerce} /> : 
                conditions.website ? <ServiceInfo handleClick={handleClick} isActive={showInfo.website} content={detailsInfo.website} /> : 
                conditions.socialMedia ? <ServiceInfo handleClick={handleClick} isActive={showInfo.socialMedia} content={detailsInfo.socialMedia} /> : 
                conditions.ebook ? <ServiceInfo handleClick={handleClick} isActive={showInfo.ebook} content={detailsInfo.ebook} /> : 
                conditions.cooperation ? <ServiceInfo handleClick={handleClick} isActive={showInfo.cooperation} content={detailsInfo.cooperation} /> : null
            }
        </Flex>
    )
}

ServiceIcon.propTypes = {
    title: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    showInfo: PropTypes.object.isRequired,
}

export default ServiceIcon