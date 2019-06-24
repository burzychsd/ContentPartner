// DEPENDENCIES
import React from 'react'
import loadable from '@loadable/component'

// COMPONENTS
import Layout from './src/components/templates/Layout'
import Page from './src/components/templates/Page'
import SEO from './src/components/templates/SEO'

// PAGES
const NotFound = loadable(() => import('./src/pages/404'))
const Home = loadable(() => import('./src/pages/index'))
const About = loadable(() => import('./src/pages/o-mnie'))
const Services = loadable(() => import('./src/pages/oferta'))
const Portfolio = loadable(() => import('./src/pages/portfolio'))
const Process = loadable(() => import('./src/pages/proces'))
const Contact = loadable(() => import('./src/pages/kontakt'))
const Blog = loadable(() => import('./src/components/templates/Blog'))
const BlogPost = loadable(() => import('./src/components/templates/BlogPost'))

// HOC
import pagesPaths from './src/HOC/pagesPaths'

// ANIMATION
import FadeTransition from './src/animations/FadeTransition'

const WrapPage = ({ pages, ...props }) => {

    const paths = pages.allSitePage.edges.map(edge => edge.node.path)
                                        .filter(path => path !== '/dev-404-page/' && path !== '/404.html' && path !== '/404/')

    const blogPostsPaths = pages.allSitePage.edges.map(edge => edge.node.path)
                                                  .filter(path => path.includes('post'))

    const regex = new RegExp('/blog/([0-9]+$)')

    const conditions = (path, page) =>
        page === 'home' ? path === '/' :
        page === 'about' ? path === '/o-mnie/' :
        page === 'services' ? path === '/oferta/' :
        page === 'portfolio' ? path === '/portfolio/' :
        page === 'contact' ? path === '/kontakt/' :
        page === 'blog' ? path === '/blog/' || regex.test(path) :
        page === 'process' ? path === '/proces/' : null

    const pageStyles = {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        margin: '0 auto',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        minHeight: `100%`,
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
    } : conditions(path, 'post') ? {
        title: `Post`,
        keywords: [`post`]
    } : conditions(path, 'process') ? {
        title: `Proces`,
        keywords: [`process`]
    } : { title: `404: Not found` }

    return (
        <Layout {...props} render={({ paddingTop, minHeight, data, pageContext, location }) => (
            <>
                <SEO {...seoProps(location.pathname)} />
                <FadeTransition
                items={conditions(location.pathname, 'home')}>
                    {items => items && (props => <Home style={{...pageStyles, ...props, paddingTop }} minHeight={minHeight} />)}
                </FadeTransition>
                <FadeTransition
                items={conditions(location.pathname, 'about')}>
                    {items => items && (props => <About style={{...pageStyles, ...props, paddingTop }} minHeight={minHeight} />)}
                </FadeTransition>
                <FadeTransition
                items={conditions(location.pathname, 'services')}>
                    {items => items && (props => <Services style={{...pageStyles, ...props, paddingTop }} minHeight={minHeight} />)}
                </FadeTransition>
                <FadeTransition
                items={conditions(location.pathname, 'portfolio')}>
                    {items => items && (props => <Portfolio style={{...pageStyles, ...props, paddingTop }} minHeight={minHeight} />)}
                </FadeTransition>
                <FadeTransition
                items={conditions(location.pathname, 'contact')}>
                    {items => items && (props => <Contact style={{...pageStyles, ...props, paddingTop }} minHeight={minHeight} />)}
                </FadeTransition>
                {conditions(location.pathname, 'blog') && <Blog style={{...pageStyles, ...props, paddingTop }} minHeight={minHeight} data={data} pageContext={pageContext} location={location} />}
                {blogPostsPaths.includes(`/${pageContext.slug}`) && <BlogPost style={{...pageStyles, ...props, paddingTop }} minHeight={minHeight} pageContext={pageContext} />}
                <FadeTransition
                items={conditions(location.pathname, 'process')}>
                    {items => items && (props => <Process style={{...pageStyles, ...props, paddingTop }} minHeight={minHeight} />)}
                </FadeTransition>
                <FadeTransition
                items={paths.filter(path => '/' + path.replace(/\W+/g, '') === '/' + location.pathname.replace(/\W+/g, '')).length === 0}>
                    {items => items && (props => <NotFound style={{...pageStyles, ...props, paddingTop }} minHeight={minHeight} />)}
                </FadeTransition> 
            </>
        )} />
    )
}

export default pagesPaths(WrapPage)