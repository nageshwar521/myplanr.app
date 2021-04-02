const {createAction} = require('@reduxjs/toolkit');
const {actionTypes} = require('../actionTypes');

const setModalOptionsAction = createAction(actionTypes.SET_MODAL_OPTIONS);

export const setModalOptions = (payload) => {
  return async (dispatch, getState) => {
    dispatch(setModalOptionsAction(payload));
  };
};

const setToasterOptionsAction = createAction(actionTypes.SET_MODAL_OPTIONS);

export const setToasterOptions = (payload) => {
  return async (dispatch, getState) => {
    dispatch(setToasterOptionsAction(payload));
  };
};

export const setStoreStatus = createAction(actionTypes.SET_STORE_STATUS);

export const updateStoreStatus = (payload) => {
  return async (dispatch, getState) => {
    dispatch(setStoreStatus(payload));
  };
};
