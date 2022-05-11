import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import AuthBox from '../../shared/components/AuthBox'
import InputLabel from '../../shared/components/InputLabel';
import Redirect from '../../shared/components/Redirect';
import { useNavigate } from 'react-router-dom';
import { validateRegisterForm } from '../../shared/utils/validator';
import CustomButton from '../../shared/components/CustomButton';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/authAction';

type RegisterProps = {
  register: Function
}

function Register({ register }: RegisterProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    console.log('useEffect');
    setIsFormValid(validateRegisterForm(email, username, password));
  }, [email, password]);

  const handleFormSubmit = () => {
    const userDetails = { email, username, password };
    register(userDetails, navigate);
  };

  const handleRedirectToLoginPage = () => {
    navigate('/login');
  }

  return (
    <AuthBox>
      <Typography variant='h5' sx={{ color: 'white' }}>
        Create an account
      </Typography>

      <InputLabel
        type='email'
        label='E-mail'
        placeholder='Enter e-mail address'
        value={email}
        setValue={setEmail}
      />
      <InputLabel
        type='text'
        label='Username'
        placeholder='Enter a username'
        value={username}
        setValue={setUsername}
      />
      <InputLabel
        type='password'
        label='Password'
        placeholder='Enter password'
        value={password}
        setValue={setPassword}
      />

      <CustomButton
        label='Register'
        customStyles={{ marginTop: '30px' }}
        disabled={!isFormValid}
        onClick={handleFormSubmit}
      />

      <Redirect
        text='Already have an account?'
        redirectText='Login'
        redirectHandler={handleRedirectToLoginPage}
        customStyles={{ marginTop: '5px' }}
      />
    </AuthBox>
  )
}

const mapActionsToProps = () => {
  return {
    ...getActions()
  }
}

export default connect(null, mapActionsToProps)(Register);