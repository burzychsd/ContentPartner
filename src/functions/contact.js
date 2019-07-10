// Gatsby uses weird config stuff
const axios = require('axios')

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
  })

  const RECAPTCHA_VERIFY_URL= 'https://www.google.com/recaptcha/api/siteverify'

  // Connect to our Mailgun API wrapper and instantiate it 
  const mailgun = require('mailgun-js')
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  })

  // Response stuff
  const successCode = 200
  const errorCode = 400
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  // Our cloud function
  exports.handler = function(event, context, callback) {
    let data = JSON.parse(event.body)
    let { name, email, topic, message, recaptchaToken } = data
    console.log(recaptchaToken)
    let mailOptions = {
      from: `${name} <${email}>`,
      to: process.env.MY_EMAIL_ADDRESS,
      replyTo: email,
      subject: `${topic}`,
      text: `${message}`,
    }

    // VERIFY TOKEN

    function isHuman(recaptchaToken) {
      return axios
        .post(`${RECAPTCHA_VERIFY_URL}?response=${recaptchaToken}&secret=${process.env.SITE_RECAPTCHA_SECRET}`)
        .then(({ data }) => {
          console.log(data)
          return data.score > 0.5
        })
        .else(error => {
          console.log(error)
          return false
        })
    }

    // It's really as simple as this, 
    // directly from the Mailgun dashboard
  
    if(isHuman(recaptchaToken)) {
      mg.messages().send(mailOptions, (error, body) => {
        if (error) {
          console.log(error)
          callback(null, {
            errorCode,
            headers,
            body: JSON.stringify(error),
          })
        } else {
          console.log(body)
          callback(null, {
            successCode,
            headers,
            body: JSON.stringify(body),
          })
        }
      })
    } else {
      console.log('I got u bot!')
    }
  }