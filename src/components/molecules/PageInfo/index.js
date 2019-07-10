// DEPENDENCIES
import React, { memo, useState, useEffect } from 'react'
import shortid from 'shortid'
import { navigate } from 'gatsby'
import { animated } from 'react-spring'

// COMPONENTS
import Text from './../../atoms/Text'
import { H1 as Heading } from './../../atoms/Heading'
import Flex from './../../atoms/Flex'

const AnimatedFlex = animated(Flex)

// DATA
import { faqData, cookiesData } from './data'

// ANIMATIONS
import { fadeTransition } from './../../../animations/fadeTransition'

const PageInfo = props => {
    const { status, handleClick } = props
    const condition1 = status === 'FAQ'
    const condition2 = status === 'Cookies'

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setTimeout(() => setMounted(true), 200)

    }, [])

    const transition1 = fadeTransition(condition1)
    const transition2 = fadeTransition(condition2)

    const faqContent = faqData.map((data, i) => 
        <Flex reset key={shortid.generate()} css={tw`flex-col my-2`} style={{ display: 'block' }}>
            <Text className='text' css={tw`font-bold my-2`}>{data.question}</Text>
            <Text className='text' css={tw`font-light my-2`} style={{ marginBottom: '1rem' }}>{i === 2 ? <span css={tw`font-bold`}
            onClick={() => {
                navigate('/kontakt/')
                handleClick()
            }}>{data.answer}</span> : data.answer}</Text>
        </Flex>
    )

    const cookiesContent = cookiesData.map(data => 
        <Flex reset key={shortid.generate()} css={tw`flex-col my-2`} style={{ display: 'block' }}>
            <Text className='text' css={tw`font-bold my-2`}>{data.listTitle}</Text>
            <ol css={tw`pl-8`} style={{ marginBottom: '1rem' }}>
                {data.listItems.map(item => 
                    <li key={shortid.generate()} className='text' css={tw`font-body font-light my-2`}>{item}</li>
                )}
            </ol>
        </Flex>
    )

    return (
        <>
            {
                mounted &&
                <>
                    {
                        transition1.map(({ item, key, props }) => 
                            item &&
                            <AnimatedFlex key={key} style={props} reset css={tw`flex-col mt-8`}>
                                <Heading className='heading'>FAQ</Heading>
                                {faqContent}
                            </AnimatedFlex>
                        )
                    }
                    {
                        transition2.map(({ item, key, props }) => 
                            item &&
                            <AnimatedFlex key={key} style={props} reset css={tw`flex-col mt-8`}>
                                <Heading className='heading'>Polityka Prywatności</Heading>
                                {cookiesContent}
                            </AnimatedFlex>
                        )
                    }
                </>
            }
        </>
    )
}

export default memo(PageInfo)