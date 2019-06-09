// DEPENDENCIES
import React, { Fragment, useState, useRef, useEffect, memo } from 'react'
import PropTypes from 'prop-types'
import loadable from '@loadable/component'

// COMPONENTS
import Header from './../../organisms/Header'
import Loader from './../../molecules/Loader'

// LAZY LOAD
const Menu = loadable(() => import(/* webpackPrefetch: true */ './../../organisms/Menu'))
const Flex = loadable(() => import(/* webpackPrefetch: true */ './../../atoms/Flex'))

// DATA
const links = ['O mnie', 'Oferta', 'Portfolio', 'Kontakt', 'Blog']

// STYLES
import './Layout.css'

const Layout = ({ children, location }) => {

  const [toggle, setToggle] = useState(false)
  const [mounted, setMounted] = useState(false)

  const setHeight = () => typeof window !== 'undefined' && typeof document !== 'undefined' ? 
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`) : null

  useEffect(() => {
    setTimeout(() => setMounted(true), 200)
    console.log(location)
    setHeight()

    typeof window !== 'undefined' ? window.addEventListener('resize', setHeight) : null

    return () => {
      typeof window !== 'undefined' ? window.removeEventListener('resize', setHeight) : null
    }

  }, [])

  const header = useRef()

  return (
    <Fragment>
      <Header innerRef={header} toggle={toggle} setToggle={setToggle} />
        {mounted &&
          <div id='site_wrapper' style={{ paddingTop: header.current.offsetHeight + 40 }}>
            <Menu
            links={links}
            toggle={toggle}
            setToggle={setToggle}
            headerHeight={header.current.offsetHeight} />
            {children}
          </div>
        }
      {location.pathname !== '/' && <footer></footer>}
      <form name='contact_basic' data-netlify='true' hidden>
        <input type='text' name='name' />
        <input type='email' name='email' />
        <textarea name='message'></textarea>
      </form>
      <Loader animate={!mounted} />
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default memo(Layout)
