// DEPENDENCIES
import React, { useEffect } from 'react'
import useRecaptcha, { Badge } from 'react-recaptcha-hook'

const Recaptcha = ({ action, sitekey, onToken }) => {
    const execute = useRecaptcha({ sitekey, hideDefaultBadge: true });

    useEffect(() => {
      const getToken = async () => {
        const token = await execute(action);
        onToken(token);
        console.log(token)
      };

      getToken();
    }, []);

    return <Badge css={tw`text-center text-xs sm:text-sm font-body mb-12 mx-auto text-dark_puce`} style={{ lineHeight: '1.625rem' }} />;
  };

  export default Recaptcha;