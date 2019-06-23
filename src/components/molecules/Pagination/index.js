// DEPENDENCIES
import React, { memo } from 'react'
import shortid from 'shortid'
import { navigate } from 'gatsby'

// COMPONENTS
import Flex from './../../atoms/Flex'
import Button from './../../atoms/Button'

const Pagination = props => {

    const { location, pageContext } = props
    const { numPages, currentPage } = pageContext

    const range = (start, stop, step) => {
        let a = [start], b = start;
        while (b < stop) {
            a.push(b += step || 1);
        }
        return a;
    }

    const condition = number => number ?
        location.pathname !== `/blog/${number}/` && location.pathname !== `/blog/${number}` :
        location.pathname !== '/blog/' && location.pathname !== '/blog'

    const buttons = range(currentPage, 
        currentPage + 3 > numPages ? numPages : currentPage + 6).map(number => {

            return (
                <Button key={shortid.generate()} noneStyles
                css={tw`border-none cursor-pointer font-light font-body py-2 px-4 
                rounded mx-1 px-3`} 
                style={{ display: number !== 0 ? 'inherit' : 'none', background: `${(!condition(null) && number === 1) || (!condition(number) && number !== 1) ? '#FEFCAD' : '#FFF' }` }}
                onClick={e => number === 1 && condition(null) ? navigate('/blog') : 
                              number !== 1 && condition(number) ? navigate(`/blog/${number}`) : null}>
                    {number}
                </Button>
            )
        }
    )

    const buttonProps = {
        className: `button`,
        noneStyles: true,
        style: { margin: '0 0.5rem' }
    }

    return (
        <Flex reset css={tw` flex-wrap justify-center mb-12`}>
            {condition(null) && 
            <Button {...buttonProps}
            css={tw`border-none cursor-pointer font-light font-body py-2 px-3 
            rounded bg-transparent`} onClick={e => navigate('/blog')}>First</Button>}
            {buttons}
            {condition(numPages) && 
            <Button {...buttonProps}
            css={tw`border-none cursor-pointer font-light font-body py-2 px-3
            rounded bg-transparent`} onClick={e => navigate(`/blog/${numPages}`)}>Last</Button>}
        </Flex>
    )
}

export default memo(Pagination)