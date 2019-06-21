// DEPENDENCIES
import React, { memo, useState } from 'react'

// COMPONENTS
import Flex from './../../atoms/Flex'
import FormField from './../../atoms/FormField'
import Button from './../../atoms/Button'

const ContactForm = props => {

    const formContainerProps = {
        reset: true,
        style: { minHeight: 400, maxWidth: 680 }
    }

    const inputProps = type => ({
        name: type,
        type: type === 'email' ? 'email' : 'text',
        placeholder: `${type.charAt(0).toUpperCase()}${type.slice(1, )}`,
        required: true,
        style: { border: 'none', borderBottom: '4px solid #B4EBCA', 
        alignSelf: type === 'topic' ? 'center' : null },
        ariaLabel: type
    })

    const formItemClasses = { ...tw`w-5/6 xs:w-2/5 appearance-none bg-transparent font-body font-light text-dark_puce py-2 m-4 leading-tight focus:outline-none focus:bg-transparent` }

    return (
        <Flex as='form' css={tw`w-full flex-col justify-between items-center xs:items-start mt-0 mb-12 px-2`}
        {...formContainerProps}>
            <Flex reset css={tw` w-full flex-col xs:flex-row flex-wrap my-2 xs:justify-center items-center xs:my-0 mx-auto`}>
                <FormField reset {...inputProps('name')} css={formItemClasses} />
                <FormField reset {...inputProps('email')} css={formItemClasses} />
            </Flex>
            <FormField reset {...inputProps('topic')} css={formItemClasses} />
            <FormField 
            reset
            as='textarea'
            name='message'
            placeholder='Message...'
            required
            style={{ resize: 'none', width: '100%', minHeight: 180, minWidth: '100%',
            border: '4px solid #B4EBCA', borderTop: 'none', padding: '1rem', margin: '0 0 1.5rem 0' }}
            css={formItemClasses} />
            <Button className='button' css={tw`font-body font-light text-dark_puce`} style={{ margin: 0 }}>Submit</Button>
        </Flex>
    )
}

export default memo(ContactForm)