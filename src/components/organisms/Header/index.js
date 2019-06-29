// DEPENDENCIES
import React, { memo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { RemoveScrollBar, zeroRightClassName } from 'react-remove-scroll-bar'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Navigation from './../../molecules/Navigation'

// PROPS
import { headerProps, navProps } from './props'

const Header = (props) => {

    const { toggle, setToggle, innerRef, preventScroll } = props

    const [scrollPos, setScrollPos] = useState({ y: 0 })

    useEffect(() => {

        typeof window !== 'undefined' ? window.addEventListener('scroll', listenToScroll) : null

        return () => {
            typeof window !== 'undefined' ? window.removeEventListener('scroll', listenToScroll) : null
        }
    }, [])


    const listenToScroll = () => {
        const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop

        const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

        const scrolled = winScroll / height

        setScrollPos({ y: scrolled })
    }

    return (
        <>
            <div style={{ width: '100%', height: 30, background: '#FFF', position: 'fixed', top: 0, zIndex: 50 }}></div>
            <Flex className={zeroRightClassName} ref={innerRef} {...headerProps} reset css={tw`px-6 sm:px-12 fixed z-50`}>
                {(toggle || preventScroll) && <RemoveScrollBar />}
                <Navigation {...navProps} toggle={toggle} setToggle={setToggle} isScrolled={scrollPos.y > 0}/>
            </Flex>
        </>
    )
}

Header.propTypes = {
    toggle: PropTypes.bool.isRequired,
    setToggle: PropTypes.func.isRequired,
    preventScroll: PropTypes.bool.isRequired
}

export default memo(Header)