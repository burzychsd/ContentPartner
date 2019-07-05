// DEPENDENCIES
import React, { memo, useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import axios from 'axios'

// COMPONENTS
import Flex from './../../atoms/Flex'
import FormField from './../../atoms/FormField'
import Button from './../../atoms/Button'
import Text from './../../atoms/Text'
import SocialMedia from './../../molecules/SocialMedia'
import Recaptcha from './../../molecules/Recaptcha'

const AnimatedFlex = animated(Flex)

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

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setTimeout(() => setMounted(true), 200)

        return () => {
            setMounted(false)
        }
    }, [])

    const config = { mass: 1, tension: 180, friction: 20 }
    const [formContainerStyle, setFormContainerStyle] = useSpring(() => ({ from: { opacity: 0 } }))

    setFormContainerStyle({ opacity: mounted ? 1 : 0, config })

    function sendEmail(token) {
        const { name, email, topic, message } = values
        const data = { name, email, topic, message }
        console.log('No errors, submit callback called!')
        if (token) {
            axios.post('/.netlify/functions/contact', JSON.stringify(data))
            .then(response => handleSuccess())
            .catch(err => handleError('Coś poszło nie tak, spróbuj ponownie później.'))
        } else {
            handleError('Recaptcha wykryło nieprawidłowość. Usuń ciasteczka i spróbuj ponownie.')
        }
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
            {
                mounted &&
                <AnimatedFlex reset css={tw`flex-col`} style={formContainerStyle}>
                    {status.error && <p css={errorMessageClasses}>{status.msg}</p>}
                    {status.loading && <hr class='contact_loader contact_loader--active' />}
                    <Flex className='contact_details' reset css={tw`flex-col lg:flex-row justify-center items-center mt-2 mx-auto`}>
                        <Text css={tw`font-bold text-sm my-2 lg:my-0 mx-2 text-center leading-normal`}>FRANCISZEK BUDZBON CONTENT PARTNER</Text>
                        <Text css={tw`font-light text-sm my-2 sm:my-0 mx-2 text-center leading-normal`}>NIP: 9532764926</Text>
                        <Text css={tw`font-light text-sm my-2 sm:my-0 mx-2 text-center leading-normal`}>Tel: 690 865 514</Text>
                    </Flex>
                    <Flex as='form' onSubmit={handleSubmit} noValidate css={tw`w-full flex-col justify-between items-center xs:items-start mt-0 mb-24 px-2`}
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
                        style={{ resize: 'none', width: '100%', minHeight: 120, minWidth: '100%',
                        border: errors.message ? '4px solid #EF946C' : '4px solid #B4EBCA', borderTop: 'none', padding: '1rem', margin: '0 0 1.5rem 0' }}
                        css={formItemClasses}
                        onChange={handleChange}
                        value={values.message || ''} />
                        {errors.message && <p css={errorMessageClasses}>{errors.message}</p>}
                        <Flex reset css={tw`w-full wrap justify-between items-center`}>
                            <Button {...submitButtonProps} css={tw`font-body font-light text-dark_puce`}>Wyślij</Button>
                            <SocialMedia />
                        </Flex>
                    </Flex>
                    <Recaptcha action='contact' sitekey='6LeSQKwUAAAAAKFAv8YR1dV3WYJdfVuJdYjqGOFm' onToken={sendEmail} />
                </AnimatedFlex>
            }
        </>
    )
}

export default memo(ContactForm)