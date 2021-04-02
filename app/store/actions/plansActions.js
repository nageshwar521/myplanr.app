import {createAction} from '@reduxjs/toolkit';
import {getAllPlansApi} from '../../services/ApiService';
import {actionTypes} from '../actionTypes';
import {setStoreStatus} from './commonActions';

const getAllPlansRequest = createAction(actionTypes.GET_ALL_PLANS_REQUEST);
const getAllPlansSuccess = createAction(actionTypes.GET_ALL_PLANS_SUCCESS);
const getAllPlansError = createAction(actionTypes.GET_ALL_PLANS_ERROR);

export const getAllPlans = () => {
  return async (dispatch, getState) => {
    dispatch(setStoreStatus('loading'));

    try {
      const {data} = await getAllPlansApi();
      console.log('getAllPlans response');
      console.log(JSON.stringify(data, '', 2));
      if (data.success) {
        dispatch(setStoreStatus('success'));
        dispatch(getAllPlansSuccess(data.data));
      } else {
        dispatch(setStoreStatus('error'));
        dispatch(getAllPlansError('Getinng plans faild'));
      }
    } catch (error) {
      // console.clear();
      dispatch(setStoreStatus('error'));
      dispatch(getAllPlansError(error));
    }
  };
};
