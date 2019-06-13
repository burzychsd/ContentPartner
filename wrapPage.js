// DEPENDENCIES
import React from 'react'
import { Location } from '@reach/router'
import loadable from '@loadable/component'

// COMPONENTS
import Layout from './src/components/templates/Layout'
import SEO from './src/components/templates/SEO'

// PAGES
const NotFound = loadable(() => import('./src/pages/404'))
const Home = loadable(() => import('./src/pages/index'))
const About = loadable(() => import('./src/pages/o-mnie'))
const Services = loadable(() => import('./src/pages/oferta'))
const Portfolio = loadable(() => import('./src/pages/portfolio'))
const Process = loadable(() => import('./src/pages/proces'))
const Contact = loadable(() => import('./src/pages/kontakt'))
const Blog = loadable(() => import('./src/pages/blog'))

// HOC
import pagesPaths from './src/HOC/pagesPaths'

// ANIMATION
import FadeTransition from './src/animations/FadeTransition'

const WrapPage = ({ data }) => {

    const paths = data.allSitePage.edges.map(edge => edge.node.path)
                                        .filter(path => path !== '/dev-404-page/' && path !== '/404.html' && path !== '/404/')

    const conditions = (path, page) =>
        page === 'home' ? path === '/' :
        page === 'about' ? path.includes('o-mnie') :
        page === 'services' ? path.includes('oferta') :
        page === 'portfolio' ? path.includes('portfolio') :
        page === 'contact' ? path.includes('kontakt') :
        page === 'blog' ? path.includes('blog') :
        page === 'process' ? path.includes('proces') : null

    const pageStyles = {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        margin: '0 auto',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        minHeight: `100%`
    }

    const seoProps = path =>
    conditions(path, 'home') ? {
        title: `Home`,
        keywords: [`home`]
    } :
    conditions(path, 'about') ? {
        title: `O mnie`,
        keywords: [`about`]
    } : conditions(path, 'services') ? {
        title: `Oferta`,
        keywords: [`services`]
    } : conditions(path, 'portfolio') ? {
        title: `Portfolio`,
        keywords: [`portfolio`]
    } : conditions(path, 'contact') ? {
        title: `Kontakt`,
        keywords: [`contact`]
    } : conditions(path, 'blog') ? {
        title: `Blog`,
        keywords: [`blog`]
    } : conditions(path, 'process') ? {
        title: `Proces`,
        keywords: [`process`]
    } : { title: `404: Not found` }

    return (
        <Location>
            {({ location }) =>
                <Layout location={location} render={({ paddingTop }) => (
                    <>
                        <SEO {...seoProps(location.pathname)} />
                        <FadeTransition
                        items={conditions(location.pathname, 'home')}>
                            {items => items && (props => <Home style={{...pageStyles, ...props, paddingTop}} />)}
                        </FadeTransition>
                        <FadeTransition
                        items={conditions(location.pathname, 'about')}>
                            {items => items && (props => <About style={{...pageStyles, ...props, paddingTop}} />)}
                        </FadeTransition>
                        <FadeTransition
                        items={conditions(location.pathname, 'services')}>
                            {items => items && (props => <Services style={{...pageStyles, ...props, paddingTop}} />)}
                        </FadeTransition>
                        <FadeTransition
                        items={conditions(location.pathname, 'portfolio')}>
                            {items => items && (props => <Portfolio style={{...pageStyles, ...props, paddingTop}} />)}
                        </FadeTransition>
                        <FadeTransition
                        items={conditions(location.pathname, 'contact')}>
                            {items => items && (props => <Contact style={{...pageStyles, ...props, paddingTop}} />)}
                        </FadeTransition>
                        <FadeTransition
                        items={conditions(location.pathname, 'blog')}>
                            {items => items && (props => <Blog style={{...pageStyles, ...props, paddingTop}} />)}
                        </FadeTransition>
                        <FadeTransition
                        items={conditions(location.pathname, 'process')}>
                            {items => items && (props => <Process style={{...pageStyles, ...props, paddingTop}} />)}
                        </FadeTransition>
                        <FadeTransition
                        items={paths.filter(path => '/' + path.replace(/\W+/g, '') === '/' + location.pathname.replace(/\W+/g, '')).length === 0}>
                            {items => items && (props => <NotFound style={{...pageStyles, ...props, paddingTop}} />)}
                        </FadeTransition> 
                    </>
                )} />
            }
        </Location>
    )
}

export default pagesPaths(WrapPage)