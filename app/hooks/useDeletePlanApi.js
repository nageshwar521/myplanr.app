import React from 'react';
import {useDispatch} from 'react-redux';
import {deletePlanApi} from '../services/ApiService';
import {getAllPlans} from '../store/actions/plansActions';

const useDeletePlanApi = () => {
  const dispatch = useDispatch();
  const [planDeletingStatus, setPlanDeletingStatus] = React.useState('initial');
  const [deletePlanResponse, setDeletePlanResponse] = React.useState(null);
  const [deletePlanError, setDeletePlanError] = React.useState(null);

  const deletePlan = async (payload) => {
    setPlanDeletingStatus(true);
    try {
      const response = await deletePlanApi(payload);
      setPlanDeletingStatus(false);
      setDeletePlanResponse(response.data);
      dispatch(getAllPlans());
    } catch (error) {
      setPlanDeletingStatus(false);
      setDeletePlanError(error.message);
    }
  };

  return {deletePlan, planDeletingStatus, deletePlanResponse, deletePlanError};
};

export default useDeletePlanApi;
