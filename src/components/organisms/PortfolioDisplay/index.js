// DEPENDENCIES
import React, { memo, Fragment, useState, useEffect } from 'react'

// COMPONENTS
import PortfolioItem from './../../molecules/PortfolioItem'

// DATA
import { descriptions } from './descriptions'

const PortfolioDisplay = props => {

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setTimeout(() => setMounted(true), 600)
    })

    return (
        <Fragment>
            {
                mounted &&
                <>
                    <PortfolioItem companyName='ecopywriting' description={descriptions.ecopywriting} />
                    <PortfolioItem companyName='umk' description={descriptions.umk} />
                    <PortfolioItem companyName='ekotechnologia' description={descriptions.ekotechnologia} />
                    <PortfolioItem companyName='jafi_sport' description={descriptions.jafi_sport} />
                    <PortfolioItem companyName='obstawiamy_info' description={descriptions.obstawiamy_info} />
                </>
            }
        </Fragment>
    )
}

export default memo(PortfolioDisplay)