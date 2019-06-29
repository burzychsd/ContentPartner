// DEPENDENCIES
import React from 'react'
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
const Blog = loadable(() => import('./src/components/templates/Blog'))
const BlogPost = loadable(() => import('./src/components/templates/BlogPost'))
const SuccessPage = loadable(() => import('./src/pages/sukces'))

// HOC
import pagesPaths from './src/HOC/pagesPaths'

const WrapPage = ({ pages, ...props }) => {

    const paths = pages.allSitePage.edges.map(edge => edge.node.path)
                                        .filter(path => path !== '/dev-404-page/' && path !== '/404.html' && path !== '/404/')

    const blogPostsPaths = pages.allSitePage.edges.map(edge => edge.node.path)
                                                  .filter(path => path.includes('post'))

    const regex = new RegExp('/blog/([0-9])/+$')

    const conditions = (path, page) =>
        page === 'home' ? path === '/' :
        page === 'about' ? path === '/o-mnie/' :
        page === 'services' ? path === '/oferta/' :
        page === 'portfolio' ? path === '/portfolio/' :
        page === 'contact' ? path === '/kontakt/' :
        page === 'blog' ? path === '/blog/' || regex.test(path) :
        page === 'process' ? path === '/proces/' :
        page === 'success_contact' ? path === '/sukces/' :
        page === '404' ? path === '/404/' : null

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

    const seoProps = (path) =>
    conditions(path, 'home') ? {
        title: `Strona główna`,
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
    } : path.includes(`/post/`) ? {
        title: `Artykuł`,
        keywords: [`post`]
    } : conditions(path, 'process') ? {
        title: `Proces`,
        keywords: [`process`]
    } : conditions(path, 'success_contact') ? {
        title: `Dziękuję`,
        keywords: [`dziękuję`]
    } : paths.filter(p => '/' + p.replace(/\W+/g, '') === '/' + path.replace(/\W+/g, '')).length === 0 ? { title: '404' } : null

    return (
        <Layout {...props} render={({ paddingTop, minHeight, data, pageContext, location }) => (
            <>
                <SEO {...seoProps(location.pathname, pageContext)} />
                <Home
                style={{...pageStyles, paddingTop }}
                minHeight={minHeight}
                status={conditions(location.pathname, 'home')} />
                <About
                style={{...pageStyles, paddingTop }}
                minHeight={minHeight}
                status={conditions(location.pathname, 'about')} />
                <Services
                style={{...pageStyles, paddingTop }}
                minHeight={minHeight}
                status={conditions(location.pathname, 'services')} />
                <Portfolio
                style={{...pageStyles, paddingTop }}
                minHeight={minHeight}
                status={conditions(location.pathname, 'portfolio')} />
                <Contact
                style={{...pageStyles, paddingTop }}
                minHeight={minHeight}
                status={conditions(location.pathname, 'contact')} />
                {conditions(location.pathname, 'blog') && 
                <Blog
                style={{...pageStyles, paddingTop }}
                minHeight={minHeight}
                data={data}
                pageContext={pageContext}
                location={location} />}
                {typeof pageContext.slug !== 'undefined' &&
                <BlogPost
                style={{...pageStyles, paddingTop }}
                minHeight={minHeight}
                pageContext={pageContext}
                location={location} />}
                <Process
                style={{...pageStyles, paddingTop }}
                minHeight={minHeight}
                status={conditions(location.pathname, 'process')} />
                <SuccessPage
                style={{...pageStyles, paddingTop }}
                minHeight={minHeight}
                status={conditions(location.pathname, 'success_contact')} />
                <NotFound
                style={{...pageStyles, paddingTop }}
                minHeight={minHeight}
                status={paths.filter(path => '/' + path.replace(/\W+/g, '') === '/' + location.pathname.replace(/\W+/g, '')).length === 0} />
            </>
        )} />
    )
}

export default pagesPaths(WrapPage)