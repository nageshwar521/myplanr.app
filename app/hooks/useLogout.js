import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigateOutside} from '../utils/RootNavigation';

const useLogout = () => {
  const [logoutStatus, setLogoutStatus] = React.useState('initial');

  const userLogout = async () => {
    setLogoutStatus('loading');
    AsyncStorage.removeItem('accessToken')
      .then(() => {
        setLogoutStatus('success');
      })
      .catch(() => {
        setLogoutStatus('error');
      });
  };

  return {userLogout, logoutStatus};
};

export default useLogout;
