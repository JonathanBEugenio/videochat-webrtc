import React from 'react';
import { Typography } from '@mui/material';

function LoginHeader() {
  return (
    <div>
        <Typography variant='h5' sx={{color: 'white'}}>
            LOGIN
        </Typography>
        <Typography sx={{color: '#b9bbbe'}}>
            We are happy that you are with us!
        </Typography>
    </div>
  );
};

export default LoginHeader;