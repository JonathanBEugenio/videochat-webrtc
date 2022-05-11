import { NavigateFunction } from 'react-router-dom';
import * as api from '../../api';
import { AppDispatch } from '../store';

export const authActions = {
  SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS'
};

const setUserDetails = (userDetails: any) => {
  return {
    type: authActions.SET_USER_DETAILS,
    payload: userDetails
  }
}

const login = (userDetails: any, navigate: NavigateFunction) => {
  return async (dispatch: AppDispatch) => {
    const response = await api.login(userDetails);
    console.log('LOGIN', response);
    if (response.error) {

    } else {
      const details = response.data.userDetails;
      localStorage.setItem("user", JSON.stringify(details));
      dispatch(setUserDetails(details));
      navigate('/dashboard');
    }
  }
}

const register = (userDetails: any, navigate: NavigateFunction) => {
  return async (dispatch: AppDispatch) => {
    const response = await api.register(userDetails);

    if (response.error) {

    } else {
      const details = response.data.userDetails;
      localStorage.setItem("user", JSON.stringify(details));
      dispatch(setUserDetails(details));
      navigate('/dashboard');
    }
  }
}

export const getActions = () => {
  return {
    login: (userDetails: any, navigate: NavigateFunction) => login(userDetails, navigate),
    register: (userDetails: any, navigate: NavigateFunction) => register(userDetails, navigate)
  }
}

export default authActions;