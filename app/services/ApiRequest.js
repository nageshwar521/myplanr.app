import config from '../config';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigateOutside} from '../utils/RootNavigation';
import {toaster} from '../utils/Toaster';
import {messages} from '../locales/messages';

/**
 * Axios defaults
 */
// axios.defaults.baseURL = config.apiBaseUrl;
const axiosInstance = axios.create();

// Headers
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
axiosInstance.defaults.headers.common.Accept = 'application/json';

/**
 * Request Interceptor
 */
axiosInstance.interceptors.request.use(
  async (inputConfig) => {
    const config = inputConfig;
    // console.log('axios req config');
    // console.log(config);
    // console.log('config');
    // console.log(config);
    // Check for and add the stored Auth Token to the header request
    let token = '';
    try {
      token = await AsyncStorage.getItem('accessToken');
    } catch (error) {
      /* Nothing */
    }
    // console.log('axios req config');
    // console.log(token);
    if (token) {
      config.headers.common.Authorization = `Bearer ${token}`;
    }

    // if (config.method.toUpperCase() !== 'GET') {
    //   config.data = config.data ? {userId: 1, ...config.data} : {userId: 1};
    // }
    // console.log('axios req config');
    // console.log(config);

    return config;
  },
  (error) => {
    // console.log('axios req error');
    // console.log(error);
    throw error;
  },
);

/**
 * Response Interceptor
 */
axiosInstance.interceptors.response.use(
  (response) => {
    // console.log('axios res success');
    // console.log(JSON.stringify(response, '', 2));
    // console.log(`${response}`);
    if (response?.data?.message) {
      toaster().show(response?.data?.message, 3000);
    }
    return response;
  },
  async (error) => {
    // console.log('axios res error');
    // console.log(JSON.stringify(error, '', 2));
    // console.log(error?.message);
    // console.log(JSON.stringify(error?.response, '', 2));
    if (error && error.response) {
      // console.log('error.response');
      // console.log(JSON.stringify(error.response, '', 2));
    }
    if (
      error?.message === 'Network Error' ||
      [401, 403].includes(error?.response?.status)
    ) {
      toaster().show(error?.message ?? messages.session_timeout_text, 3000);
      navigateOutside({
        name: 'Login',
      });
      // return Promise.reject({error});
    }
    // console.log('axios auth error!');
    // console.log(JSON.stringify(error?.response, '', 2));
    if (error?.message || error?.response?.data?.message) {
      toaster().show(error?.message || error?.response?.data?.message, 3000);
    }
    return Promise.reject(error?.message ?? error?.response?.data?.message);
  },
);

const ApiRequest = axiosInstance;

export default ApiRequest;
