import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAuthToken = () => {
  const [authLoadingStatus, setAuthLoadingStatus] = React.useState('initial');
  const [authToken, setAuthToken] = React.useState(null);
  const [authError, setAuthError] = React.useState(null);

  const getAuthToken = () => {
    setAuthLoadingStatus('loading');
    AsyncStorage.getItem('accessToken')
      .then((token) => {
        // console.log('getAuthToken token');
        // console.log(token);
        setAuthLoadingStatus('success');
        setAuthToken(token);
      })
      .catch((err) => {
        setAuthLoadingStatus('error');
        setAuthError(err);
      });
  };

  React.useEffect(() => {
    getAuthToken();
  }, []);

  return {authLoadingStatus, authError, authToken};
};

export default useAuthToken;
