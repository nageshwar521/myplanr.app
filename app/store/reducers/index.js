import {combineReducers} from 'redux';
import authReducer from './authReducer';
import commonReducer from './commonReducer';
import plansReducer from './plansReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  common: commonReducer,
  plans: plansReducer,
});

export default rootReducer;
