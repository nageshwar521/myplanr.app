import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginApi} from '../../services/ApiService';
import {setStoreStatus} from './commonActions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {createAction} = require('@reduxjs/toolkit');
const {actionTypes} = require('../actionTypes');

const loginRequest = createAction(actionTypes.LOGIN_REQUEST);
const loginSuccess = createAction(actionTypes.LOGIN_SUCCESS);
const loginError = createAction(actionTypes.LOGIN_ERROR);

export const login = (payload) => {
  return async (dispatch, getState) => {
    dispatch(loginRequest());

    try {
      const {data} = await loginApi(payload);
      if (data.success) {
        await AsyncStorage.setItem('accessToken', data.data.accessToken);
        await AsyncStorage.setItem('refreshToken', data.data.refreshToken);
        dispatch(setStoreStatus('initial'));
        dispatch(loginSuccess());
      } else {
        dispatch(loginError());
      }
    } catch (error) {
      dispatch(loginError());
    }
  };
};
