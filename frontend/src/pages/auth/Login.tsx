import React, { useState } from 'react';
import AuthBox from '../../shared/components/AuthBox';
import InputLabel from '../../shared/components/InputLabel';
import LoginHeader from './LoginHeader';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AuthBox>
      <LoginHeader />
      <InputLabel 
        type='email'
        label='E-mail'
        placeholder='Enter e-email address'
        value={email}
        setValue={setEmail}
      />
      <InputLabel 
        type='password'
        label='Password'
        placeholder='Enter password'
        value={password}
        setValue={setPassword}
      />
    </AuthBox>
  );
};

export default Login;