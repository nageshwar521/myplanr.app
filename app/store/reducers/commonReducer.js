import {actionTypes} from '../actionTypes';
import {initialState} from '../initialState';

const authReducer = (state = initialState.common, action) => {
  switch (action.type) {
    case actionTypes.SET_STORE_STATUS:
      state = {
        ...state,
        status: action.payload,
      };
      break;
    case actionTypes.SET_MODAL_OPTIONS:
      state = {
        ...state,
        modalOptions: {
          ...state.modalOptions,
          isModalVisible: action.payload,
        },
      };
      break;
    case actionTypes.SET_TOASTER_OPTIONS:
      state = {
        ...state,
        toasterOptions: {
          ...state.toasterOptions,
          ...action.payload,
        },
      };
      break;

    default:
      break;
  }
  return state;
};

export default authReducer;
