import React, { useState } from 'react';
import AuthBox from '../../shared/components/AuthBox';
import CustomButton from '../../shared/components/CustomButton';
import InputLabel from '../../shared/components/InputLabel';
import LoginHeader from './LoginHeader';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFormSubmit = () => {
    console.log('Log in')
  };

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
    </AuthBox>
  );
};

export default Login;