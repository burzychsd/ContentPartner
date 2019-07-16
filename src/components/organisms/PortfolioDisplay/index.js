// DEPENDENCIES
import React, { memo } from 'react'
import loadable from '@loadable/component'

// COMPONENTS
const PortfolioItem = loadable(() => import('./../../molecules/PortfolioItem'))

// DATA
import { descriptions } from './descriptions'

const PortfolioDisplay = props => {

    return (

        <>
            <PortfolioItem companyName='ecopywriting' description={descriptions.ecopywriting} />
            <PortfolioItem companyName='umk' description={descriptions.umk} />
            <PortfolioItem companyName='ekotechnologia' description={descriptions.ekotechnologia} />
            <PortfolioItem companyName='jafi_sport' description={descriptions.jafi_sport} />
            <PortfolioItem companyName='obstawiamy_info' description={descriptions.obstawiamy_info} />
        </>

    )
}

export default memo(PortfolioDisplay)