import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom'; 

import LoginHeader from './LoginHeader';
import AuthBox from '../../shared/components/AuthBox';
import Redirect from '../../shared/components/Redirect';
import InputLabel from '../../shared/components/InputLabel';
import CustomButton from '../../shared/components/CustomButton';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFormSubmit = () => {
    console.log('Log in')
  };

  const handleRedirectToRegisterPage = () => {
    navigate('/register');
  }

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
      <CustomButton 
        label='Log in' 
        customStyles={{marginTop: '30px'}}
        disabled={!isFormValid}
        onClick={handleFormSubmit}
      />
      <Redirect 
        text='Need an account?' 
        redirectText='Create an account'
        redirectHandler={handleRedirectToRegisterPage}
        customStyles={{ marginTop: '5px'}}
      />
    </AuthBox>
  );
};

export default Login;