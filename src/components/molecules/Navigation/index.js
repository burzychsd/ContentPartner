// DEPENDENCIES
import React, { memo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Logo from './../../../images/svg/Bulb.svg'
import Hamburger from '../Hamburger'

// PROPS
import { navProps, logoProps } from './props'

const Navigation = (props) => {

    const { height, toggle, setToggle, isScrolled } = props

    const handleClick = async (e, status) => {
        await e.preventDefault()
        if (status === 'logo') {
            await setToggle(false)
            await navigate('/')
        } else {
            await setToggle(toggle => !toggle)
        }
    }

    useEffect(() => {
        isScrolled ? 
        document.querySelector('#light').style.opacity = 1 : 
        document.querySelector('#light').style.opacity = null

        isScrolled ? 
        document.querySelector('.hamburger_container').classList.add('hamburger_container--scrolled') : 
        document.querySelector('.hamburger_container').classList.remove('hamburger_container--scrolled')

        isScrolled ? 
        document.getElementsByTagName('header')[0].style.background = 'linear-gradient(0deg, rgba(255,255,255, 0) 0%, rgb(255,255,255) 45%)' : 
        document.getElementsByTagName('header')[0].style.background = 'transparent'

    }, [isScrolled])

    return (
        <Flex {...navProps} style={{ height }} css={tw`w-full justify-between items-center`}>
            <Logo {...logoProps} css={tw`cursor-pointer`} onClick={e => handleClick(e, 'logo')}/>
            <Hamburger toggle={toggle} setToggle={e => handleClick(e, 'hamburger')} />
        </Flex>
    )
}

Navigation.propTypes = {
    height: PropTypes.string.isRequired,
    toggle: PropTypes.bool.isRequired,
    setToggle: PropTypes.func.isRequired,
    isScrolled: PropTypes.bool.isRequired
}

export default memo(Navigation)