import config from '../config';
import ApiRequest from './ApiRequest';
import {endpoints} from './endpoints';

export const loginApi = async (payload) => {
  // return await ApiRequest[endpoints.login.method](
  //   endpoints.login.path,
  //   payload,
  // );
  return ApiRequest[endpoints.login.method](
    config.apiBaseUrl + endpoints.login.path,
    payload,
  );
};

export const registerApi = async (payload) => {
  return await ApiRequest[endpoints.register.method](
    config.apiBaseUrl + endpoints.register.path,
    payload,
  );
};

export const getAllPlansApi = () => {
  console.log('getAllPlansApi');
  return ApiRequest[endpoints.allPlans.method](
    config.apiBaseUrl + endpoints.allPlans.path,
  );
};

export const getPlanDetailsApi = async (id) => {
  return await ApiRequest[endpoints.planDetails.method](
    endpoints.planDetails.path,
    {
      data: {id},
    },
  );
};

export const addPlanApi = (payload) => {
  return ApiRequest[endpoints.addPlan.method](
    config.apiBaseUrl + endpoints.addPlan.path,
    payload,
  );
};

export const updatePlanApi = (payload) => {
  return ApiRequest[endpoints.updatePlan.method](
    config.apiBaseUrl + endpoints.updatePlan.path,
    payload,
  );
};

export const deletePlanApi = (id) => {
  console.log('deletePlanApi id');
  console.log(id);
  return ApiRequest[endpoints.deletePlan.method](
    config.apiBaseUrl + endpoints.deletePlan.path,
    {
      data: {id},
    },
  );
};
