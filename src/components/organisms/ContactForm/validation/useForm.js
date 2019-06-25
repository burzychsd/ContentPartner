import { useState, useEffect } from 'react';
import { navigate } from 'gatsby'

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({})

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
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

  const handleSuccess = () => {
    setStatus({ loading: false, error: false })
    navigate('/sukces/')
  }

  const handleError = msg => {
    setStatus({
      loading: false,
      error: true,
      msg
    })
    console.log(msg)
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