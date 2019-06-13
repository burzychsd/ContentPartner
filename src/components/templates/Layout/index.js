// DEPENDENCIES
import React, { useState, useRef, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'

// COMPONENTS
import Header from './../../organisms/Header'
import Menu from './../../organisms/Menu'

// DATA
const links = ['O mnie', 'Oferta', 'Portfolio', 'Kontakt', 'Blog']

// STYLES
import './Layout.css'

const Layout = ({ children, location }) => {

  const header = useRef()
  const siteWrapper = useRef()
  const menu = useRef()

  const [toggle, setToggle] = useState(false)
  const [preventScroll, setPreventScroll] = useState(false)

  const setHeight = () => typeof window !== 'undefined' && typeof document !== 'undefined' ? 
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`) : null

  useEffect(() => {
    setHeight()
    siteWrapper.current.style.paddingTop = `${header.current.offsetHeight + 40}px`
    menu.current.style.paddingTop = `${header.current.offsetHeight + 40}px`

    typeof window !== 'undefined' ? window.addEventListener('resize', setHeight) : null

    return () => {
      typeof window !== 'undefined' ? window.removeEventListener('resize', setHeight) : null
    }

  }, [])

  useEffect(() => {
    preventScrolling()
  }, [location.pathname])

  const preventScrolling = async () => {
    await setPreventScroll(true)
    await setTimeout(() => setPreventScroll(false), 900)
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
        <div style={{ width: '100%', height: 30, background: '#FFF', position: 'fixed', top: 0, zIndex: 1000 }}></div>
        <div ref={siteWrapper} id='site_wrapper'>
          {children}
        </div>
        {location.pathname !== '/' && <footer></footer>}
        <form name='contact_basic' data-netlify='true' hidden>
          <input type='text' name='name' />
          <input type='email' name='email' />
          <textarea name='message'></textarea>
        </form>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
