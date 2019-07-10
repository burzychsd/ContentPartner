import { useState, useEffect } from 'react';
import { navigate } from 'gatsby'

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ loading: false, error: false, msg: '' })

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setStatus({ loading: true, error: false })
      callback();
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

  const handleSuccess = async () => {
    await setTimeout(() => setStatus({ loading: false, error: false }), 600)
    await navigate('/sukces/')
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