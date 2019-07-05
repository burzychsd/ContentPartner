import { useState, useEffect } from 'react';
import { navigate } from 'gatsby'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ loading: false, error: false, msg: '' })

  const { executeRecaptcha } = useGoogleReCaptcha()
  let recaptchaValidation = null

  useEffect(() => {
    const token = executeRecaptcha('kontakt')
    recaptchaValidation = token
  }, [])

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting && recaptchaValidation) {
      setStatus({ loading: true, error: false })
      callback();
    } else if (Boolean(recaptchaValidation) === false) {
      handleError('Coś poszło nie tak. Spróbuj ponownie później.')
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  const handleSuccess = () => {
    navigate('/sukces/')
    setTimeout(() => setStatus({ loading: false, error: false }), 600)
  }

  const handleError = msg => {
    setStatus({
      loading: false,
      error: true,
      msg
    })
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    handleSuccess,
    handleError,
    status
  }
};

export default useForm;