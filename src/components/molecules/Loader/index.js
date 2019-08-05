// DEPENDENCIES
import React, { memo } from 'react'

// COMPONENTS
import Spin from './../../../images/svg/tail-spin.svg'

const Loader = (props) => {

    const { animate } = props

    const show = animate => ({ opacity: animate ? 1 : 0, transition: 'opacity 400ms ease-out 0.0001s' })

    return (
        <Spin style={{ width: '4rem', height: '4rem', position: 'fixed', top: '50%', transform: 'translateY(-50%)', left: 0, right: 0, margin: '0 auto', ...show(animate) }} />
    )

}

export default memo(Loader)