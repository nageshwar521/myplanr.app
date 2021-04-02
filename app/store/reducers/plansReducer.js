import {actionTypes} from '../actionTypes';
import {initialState} from '../initialState';

const plansReducer = (state = initialState.plans, action) => {
  // console.log('action');
  console.log(action);
  switch (action.type) {
    case actionTypes.GET_ALL_PLANS_REQUEST:
      state = {...state, isPlansLoading: true};
      break;
    case actionTypes.GET_ALL_PLANS_SUCCESS:
      state = {
        ...state,
        plans: action.payload,
        isPlansLoading: false,
      };
      break;
    case actionTypes.GET_ALL_PLANS_ERROR:
      state = {
        ...state,
        plansError: action.payload,
        isPlansLoading: false,
      };
      break;

    default:
      break;
  }
  return state;
};

export default plansReducer;
