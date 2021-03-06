// DEPENDENCIES
import React, { useState, useRef, useEffect, Fragment, memo } from 'react'
import PropTypes from 'prop-types'
import loadable from '@loadable/component'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Header from './../../organisms/Header'
import Menu from './../../organisms/Menu'
import Footer from './../../organisms/Footer'
import Modal from './../../molecules/Modal'
import PageInfo from './../../molecules/PageInfo'
const CookiesInfo = loadable(() => import('./../../molecules/CookiesInfo'))

import Loader from './../../molecules/Loader'

// DATA
const links = ['O mnie', 'Oferta', 'Portfolio', 'Kontakt', 'Blog']

// STYLES
import './Layout.css'

const Layout = ({ children, location }) => {

  const regex = new RegExp('/blog/([0-9]+$)')

  const headerRef = useRef()
  const siteWrapperRef = useRef()

  const [toggle, setToggle] = useState(false)
  const [preventScroll, setPreventScroll] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)
  const [showModal, setShowModal] = useState({ modal: false, faq: false, cookies: false })

  const setHeight = () => {
    typeof window !== 'undefined' && typeof document !== 'undefined' ? 
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`) : null

    setWindowHeight(window.innerHeight)
  }

  useEffect(() => {
    setHeight()
    setHeaderHeight(headerRef.current.offsetHeight)

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
    await location.pathname === '/blog/' || regex.test(location.pathname) ? setPreventScroll(false) : 
          setTimeout(() => setPreventScroll(false), 1200)
  }

  return (
    <Fragment>
      <Header
      innerRef={headerRef}
      toggle={toggle}
      setToggle={setToggle}
      preventScroll={preventScroll} />
      <Menu
      paddingTop={headerHeight + 40}
      links={links}
      toggle={toggle}
      setToggle={setToggle} />
      <main ref={siteWrapperRef} id='site_wrapper'>
        <Flex as='section' reset css={tw`h-full flex-col items-center`} style={{ paddingTop: `${headerHeight + 40}px`, minHeight: windowHeight < 480 ? 480 : windowHeight, overflowX: 'hidden' }}>
          {children}
        </Flex>
        <Modal isActive={showModal.modal}
        handleClick={() => setShowModal({ modal: false, faq: false, cookies: false })} button='Zamknij'>
          <PageInfo status={showModal.faq ? 'FAQ' : showModal.cookies ? 'Cookies' : null}
          handleClick={() => setShowModal({ modal: false, faq: false, cookies: false })} />
        </Modal>
      </main>
      {location.pathname !== '/' && windowHeight > 0 && <Footer setShowModal={setShowModal} />}
      <CookiesInfo setShowModal={setShowModal} />
      {headerHeight === 0 && <Loader animate={headerHeight === 0} />}
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default memo(Layout)