import React from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const WrapPage = ({ element }) => {

    return (
        <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_KEY}>
            { element }
        </GoogleReCaptchaProvider>
    )
}

export default WrapPage