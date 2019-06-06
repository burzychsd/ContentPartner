// DEPENDENCIES
import React, { Fragment, useState, useRef, useEffect } from 'react'
import { Transition, animated } from 'react-spring/renderprops'
import { Location } from '@reach/router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// COMPONENTS
import Header from './../../organisms/Header'
import Menu from './../../organisms/Menu'

// STYLES
import './Layout.css'

const Layout = ({ children, greaterThanMd, orientation }) => {

  const [toggle, setToggle] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    let vh = typeof window !== 'undefined' ? window.innerHeight * 0.01 : null
    document.documentElement.style.setProperty('--vh', `${vh}px`)

  }, [])

  const header = useRef()

  const headerProps = {
    toggle,
    setToggle,
    greaterThanMd,
    orientation
  }

  const menuProps = {
    links: ['O mnie', 'Oferta', 'Portfolio', 'Kontakt', 'Blog'],
    toggle,
    setToggle
  }

  const contentPadding = `${greaterThanMd ? '2rem' : '1.5rem'}`

  return (
    <Location>
      {({ location }) => (
        <Fragment>
          <div id='site_wrapper'>
          <Header innerRef={header} {...headerProps} />
          {mounted && <Menu {...menuProps} headerHeight={header.current.offsetHeight} />}
          <Transition
          native
          config={{ mass: 1, tension: 60, friction: 20 }}
          key={location.pathname}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
          >
          {() => style => (
            <animated.main
            style={{...style,
              paddingTop: header.current.offsetHeight + 40,
              paddingLeft: contentPadding, paddingRight: contentPadding,
              height: `100%`, minHeight: 480}}>{children}</animated.main>
          )}
          </Transition>
          </div>
          <footer></footer>
          <form name='contact_basic' data-netlify='true' hidden>
            <input type='text' name='name' />
            <input type='email' name='email' />
            <textarea name='message'></textarea>
          </form>
        </Fragment>
      )}
    </Location>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const mapStateToProps = state => ({
  greaterThanMd: state.browser.greaterThan.md,
  orientation: state.browser.orientation
})

export default connect(mapStateToProps, null)(Layout)
