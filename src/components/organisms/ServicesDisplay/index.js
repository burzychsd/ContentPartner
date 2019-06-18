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

    const [mounted, setMounted] = useState(false)
    const [showInfo, setShowInfo] = useState({
        articles: false,
        ecommerce: false,
        website: false,
        socialMedia: false,
        ebook: false,
        cooperation: false
    })

    useEffect(() => {
        setTimeout(() => setMounted(true), 400)

        return () => {
            setMounted(false)
        }
    },[])

    return (
        <Flex {...containerProps}>
            <ServiceIcon title='Artykuły tematyczne' status={mounted} handleClick={setShowInfo} showInfo={showInfo} />
            <ServiceIcon title='Opisy produktów' status={mounted} handleClick={setShowInfo} showInfo={showInfo} />
            <ServiceIcon title='Treści na strony www' status={mounted} handleClick={setShowInfo} showInfo={showInfo} />
            <ServiceIcon title='Media społecznościowe' status={mounted} handleClick={setShowInfo} showInfo={showInfo} />
            <ServiceIcon title='E-booki' status={mounted} handleClick={setShowInfo} showInfo={showInfo} />
            <ServiceIcon title='Kompleksowa współpraca' status={mounted} handleClick={setShowInfo} showInfo={showInfo} />
        </Flex>
    )
}

export default memo(ServicesDisplay)