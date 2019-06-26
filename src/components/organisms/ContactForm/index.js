// DEPENDENCIES
import React, { memo } from 'react'
import axios from 'axios'
import loadable from '@loadable/component'

// COMPONENTS
import Flex from './../../atoms/Flex'
const FormField = loadable(() => import('./../../atoms/FormField'))
const Button = loadable(() => import('./../../atoms/Button'))

// VALIDATION
import useForm from './validation/useForm'
import validate from './validation/contactFormValidationRules'

// STYLES
import './ContactForm.css'

const ContactForm = props => {

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        handleSuccess,
        handleError,
        status
    } = useForm(sendEmail, validate);

    function sendEmail() {
        const { name, email, topic, message } = values
        const data = { name, email, topic, message }
        console.log('No errors, submit callback called!');
        axios.post('/.netlify/functions/contact', JSON.stringify(data))
        .then(response => handleSuccess())
        .catch(err => handleError('Coś poszło nie tak, spróbuj ponownie później.'))
    }

    const formContainerProps = {
        reset: true,
        style: { minHeight: 400, maxWidth: 680 },
        as: `form`,
        noValidate: true,
    }

    const inputProps = type => {

        const condition = {
            name: type === 'imię i nazwisko',
            email: type === 'adres e-mail',
            topic: type === 'temat'
        }

        const inputName = condition.name ? 'name' :
                          condition.email ? 'email' :
                          condition.topic ? 'topic' : null

        return ({
            name: inputName,
            type: condition.email ? 'email' : 'text',
            placeholder: `${type.charAt(0).toUpperCase()}${type.slice(1, )}`,
            required: true,
            style: { border: 'none', borderBottom: errors[`${inputName}`] ? '4px solid #EF946C' : '4px solid #B4EBCA', 
            alignSelf: condition.topic ? 'center' : null, marginBottom: condition.topic ? '2rem' : null },
            ariaLabel: inputName,
            autoComplete: 'off',
            onChange: handleChange,
            value: values[`${inputName}`] || ''
        })
    }

    const submitButtonProps = {
        className: 'button',
        style: { margin: 0 },
        onClick: e => handleSubmit(e)
    }

    const formItemClasses = { ...tw`appearance-none bg-transparent font-body font-light text-dark_puce py-2 leading-tight focus:outline-none focus:bg-transparent` }
    const errorMessageClasses = { ...tw`text-center text-xs sm:text-sm font-body mb-4 mx-auto text-dark_salmon` }

    return (
        <>
            {status.error && <p css={errorMessageClasses}>{status.msg}</p>}
            {status.loading && <hr class='contact_loader contact_loader--active' />}
            <Flex as='form' onSubmit={handleSubmit} noValidate css={tw`w-full flex-col justify-between items-center xs:items-start mt-0 mb-32 px-2`}
            {...formContainerProps}>
                <Flex reset css={tw`w-full flex-col xs:flex-row flex-wrap my-2 xs:justify-center items-center xs:my-0 mx-auto`}>
                    <Flex reset css={tw`flex-col w-5/6 xs:w-2/5 my-4 xs:mr-6`} style={{ height: 80 }}>
                        <FormField reset {...inputProps('imię i nazwisko')} css={formItemClasses} />
                        {errors.name && <p css={errorMessageClasses} style={{ marginTop: '1rem' }}>{errors.name}</p>}
                    </Flex>
                    <Flex reset css={tw`flex-col w-5/6 xs:w-2/5 my-4 xs:ml-6`} style={{ height: 80 }}>
                        <FormField reset {...inputProps('adres e-mail')} css={formItemClasses} />
                        {errors.email && <p css={errorMessageClasses} style={{ marginTop: '1rem' }}>{errors.email}</p>}
                    </Flex>
                </Flex>
                <FormField reset {...inputProps('temat')} css={formItemClasses} />
                {errors.topic && <p css={errorMessageClasses}>{errors.topic}</p>}
                <FormField 
                reset
                as='textarea'
                name='message'
                placeholder='Wiadomość...'
                required
                style={{ resize: 'none', width: '100%', minHeight: 180, minWidth: '100%',
                border: errors.message ? '4px solid #EF946C' : '4px solid #B4EBCA', borderTop: 'none', padding: '1rem', margin: '0 0 1.5rem 0' }}
                css={formItemClasses}
                onChange={handleChange}
                value={values.message || ''} />
                {errors.message && <p css={errorMessageClasses}>{errors.message}</p>}
                <Button {...submitButtonProps} css={tw`font-body font-light text-dark_puce`}>Wyślij</Button>
            </Flex>
        </>
    )
}

export default memo(ContactForm)