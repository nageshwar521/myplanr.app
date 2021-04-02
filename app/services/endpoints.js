export const endpoints = {
  login: {path: '/login', method: 'post'},
  register: {path: '/register', method: 'post'},
  refreshToken: {path: '/refreshToken', method: 'post'},
  allPlans: {path: '/tasks', method: 'get'},
  planDetails: {path: '/tasks', method: 'get'},
  addPlan: {path: '/tasks', method: 'post'},
  updatePlan: {path: '/tasks', method: 'put'},
  deletePlan: {path: '/tasks', method: 'delete'},
};
