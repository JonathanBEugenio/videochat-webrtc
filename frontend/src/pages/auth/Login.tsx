import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginHeader from './LoginHeader';
import AuthBox from '../../shared/components/AuthBox';
import Redirect from '../../shared/components/Redirect';
import InputLabel from '../../shared/components/InputLabel';
import CustomButton from '../../shared/components/CustomButton';
import { validateLoginForm } from '../../shared/utils/validator';
import { connect, ConnectedProps } from 'react-redux';
import { getActions } from '../../store/actions/authAction';

type LoginProps = PropsFromRedux;

function Login({ login }: LoginProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateLoginForm(email, password));
  }, [email, password]);

  const handleFormSubmit = () => {
    const userDetails = { email, password }
    console.log('AQUI');
    login(userDetails, navigate);
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
        customStyles={{ marginTop: '30px' }}
        disabled={!isFormValid}
        onClick={handleFormSubmit}
      />
      <Redirect
        text='Need an account?'
        redirectText='Create an account'
        redirectHandler={handleRedirectToRegisterPage}
        customStyles={{ marginTop: '5px' }}
      />
    </AuthBox>
  );
};


const connector = connect(null, getActions());

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Login);