// DEPENDENCIES
import React, { Fragment, useState, useRef, useEffect, memo } from 'react'
import PropTypes from 'prop-types'
import loadable from '@loadable/component'

// COMPONENTS
import Header from './../../organisms/Header'
const Menu = loadable(() => import('./../../organisms/Menu'))

// DATA
const links = ['O mnie', 'Oferta', 'Portfolio', 'Kontakt', 'Blog']

// STYLES
import './Layout.css'

const Layout = ({ children }) => {

  const [toggle, setToggle] = useState(false)
  const [mounted, setMounted] = useState(false)

  const setHeight = () => document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)

  useEffect(() => {
    setMounted(true)
    setHeight()

    window.addEventListener('resize', setHeight)

    return () => {
      window.removeEventListener('resize', setHeight)
    }

  }, [])

  const header = useRef()

  return (
      <Fragment>
        <div id='site_wrapper'>
          <Header innerRef={header} toggle={toggle} setToggle={setToggle} />
          {mounted &&
            <Fragment>
              <Menu
              links={links}
              toggle={toggle}
              setToggle={setToggle}
              headerHeight={header.current.offsetHeight} />
              <main style={{paddingTop: header.current.offsetHeight + 40,
              height: `100%`, minHeight: 480}}>{children}</main>
            </Fragment>
          }
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

export default memo(Layout)
