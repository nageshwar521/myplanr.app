import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginApi} from '../services/ApiService';

const useLogin = () => {
  const [loginStatus, setLoginStatus] = React.useState('initial');
  const [loginToken, setLoginToken] = React.useState(null);
  const [loginError, setLoginError] = React.useState(null);

  const userLogin = (payload) => {
    setLoginStatus('loading');
    loginApi(payload)
      .then(async ({data}) => {
        console.log('userLogin data');
        console.log(data);
        console.log(data.success);
        if (data.success) {
          await AsyncStorage.setItem('accessToken', data.data.accessToken);
          // await AsyncStorage.setItem('refreshToken', data.data.refreshToken);
          setLoginStatus('success');
          setLoginToken(data.data.accessToken);
        } else {
          setLoginStatus('error');
          setLoginError('Login Error');
        }
      })
      .catch((err) => {
        setLoginStatus('error');
        setLoginError(err);
      });
  };

  return {userLogin, loginStatus, loginError, loginToken};
};

export default useLogin;
