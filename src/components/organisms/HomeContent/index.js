// DEPENDENCIES
import React from 'react'

// COMPONENTS
import Flex from './../../atoms/Flex'
import { H1 as Heading } from './../../atoms/Heading'
import Text from './../../atoms/Text'
import Button from './../../atoms/Button'

const HomeContent = () => {

    const containerProps = {
        reset: true,
        style: { maxWidth: 600, minHeight: '50%' }
    }

    const headingProps = {
        className: 'heading'
    }

    const textProps = {
        className: 'text'
    }

    const buttonProps = {
        reset: true,
        className: `button`
    }

    return (
        <Flex {...containerProps} css={tw`flex-col justify-center`}>
            <Heading {...headingProps} css={tw`text-center my-2 xl:text-left`}>Słowa to nie zbiór znaków</Heading>
            <Text {...textProps} css={tw`w-full font-light text-center px-0 xs:px-8 xl:px-0 xl:w-4/5 xl:text-left`}>Słowa to treść Twojego biznesu. Zamów artykuły, opisy 
            oraz inne teksty, które inspirują i przekonują.</Text>
            <Button {...buttonProps} css={tw`self-center xl:self-start`}>Dowiedz się więcej</Button>
        </Flex>
    )
}

export default HomeContent