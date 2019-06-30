// DEPENDENCIES
import React, { memo, useState, useEffect } from 'react'

// COMPONENTS
import Flex from './../../atoms/Flex'
import ServiceIcon from './../../molecules/ServiceIcon'

// STYLES
import './ServicesDisplay.css'

const ServicesDisplay = props => {

    const containerProps = {
        className: 'services_container',
        reset: true
    }

    const [showInfo, setShowInfo] = useState({
        articles: false,
        ecommerce: false,
        website: false,
        socialMedia: false,
        ebook: false,
        cooperation: false
    })

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setTimeout(() => setMounted(true), 600)
    }, [])

    return (
        <>
            {
                mounted && 
                <Flex {...containerProps}>
                    <ServiceIcon title='Artykuły tematyczne' handleClick={setShowInfo} showInfo={showInfo} />
                    <ServiceIcon title='Opisy produktów' handleClick={setShowInfo} showInfo={showInfo} />
                    <ServiceIcon title='Treści na strony www' handleClick={setShowInfo} showInfo={showInfo} />
                    <ServiceIcon title='Media społecznościowe' handleClick={setShowInfo} showInfo={showInfo} />
                    <ServiceIcon title='E-booki' handleClick={setShowInfo} showInfo={showInfo} />
                    <ServiceIcon title='Kompleksowa współpraca' handleClick={setShowInfo} showInfo={showInfo} />
                </Flex>
            }
        </>
    )
}

export default memo(ServicesDisplay)