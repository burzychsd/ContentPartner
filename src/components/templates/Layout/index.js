// DEPENDENCIES
import React, { useState, useRef, useEffect, Fragment, memo } from 'react'
import PropTypes from 'prop-types'
import loadable from '@loadable/component'

// COMPONENTS
import Header from './../../organisms/Header'
import Menu from './../../organisms/Menu'
const CookiesInfo = loadable(() => import('./../../molecules/CookiesInfo'))

// DATA
const links = ['O mnie', 'Oferta', 'Portfolio', 'Kontakt', 'Blog']

// STYLES
import './Layout.css'

const Layout = ({ render, props }) => {

  const { data, pageContext, location } = props

  const regex = new RegExp('/blog/([0-9]+$)')

  const header = useRef()
  const siteWrapper = useRef()
  const menu = useRef()

  const [toggle, setToggle] = useState(false)
  const [preventScroll, setPreventScroll] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)
  const [cookiesInfo, setCookiesInfo] = useState(false)
  const [showModal, setShowModal] = useState({ faq: false, policy: false })

  const setHeight = () => {
    typeof window !== 'undefined' && typeof document !== 'undefined' ? 
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`) : null

    setWindowHeight(window.innerHeight)
  }

  useEffect(() => {
    setTimeout(() => setCookiesInfo(true), 3500)
    setHeight()
    setHeaderHeight(header.current.offsetHeight)
    menu.current.style.paddingTop = `${header.current.offsetHeight + 40}px`

    typeof window !== 'undefined' ? window.addEventListener('resize', setHeight) : null

    return () => {
      typeof window !== 'undefined' ? window.removeEventListener('resize', setHeight) : null
    }

  }, [])

  useEffect(() => {
    preventScrolling(location)
  }, [location.pathname])

  const preventScrolling = async (location) => {
    await setPreventScroll(true)
    await location.pathname === '/' && windowHeight >= 480 ? null : 
          location.pathname === '/blog/' || regex.test(location.pathname) ? setPreventScroll(false) : 
          setTimeout(() => setPreventScroll(false), 1200)
  }

  return (
    <Fragment>
      <Header
      innerRef={header}
      toggle={toggle}
      setToggle={setToggle}
      preventScroll={preventScroll} />
      <Menu
      innerRef={menu}
      links={links}
      toggle={toggle}
      setToggle={setToggle} />
        <div style={{ width: '100%', height: 30, background: '#FFF', position: 'fixed', top: 0, zIndex: 50 }}></div>
        <main ref={siteWrapper} id='site_wrapper'>
          {render({ paddingTop: `${headerHeight + 40}px`, minHeight: windowHeight < 480 ? 480 : `calc(${windowHeight}px - ${headerHeight + 40}px)`, data, pageContext, location })}
        </main>
        <form name='contact_basic' data-netlify='true' hidden>
          <input type='text' name='name' />
          <input type='email' name='email' />
          <textarea name='message'></textarea>
        </form>
        <CookiesInfo isActive={cookiesInfo} handleClose={e => setCookiesInfo(false)} />
    </Fragment>
  )
}

Layout.propTypes = {
  render: PropTypes.func.isRequired,
}

export default memo(Layout)
