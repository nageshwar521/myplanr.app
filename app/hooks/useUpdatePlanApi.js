import React from 'react';
import {useDispatch} from 'react-redux';
import {updatePlanApi} from '../services/ApiService';
import {getAllPlans} from '../store/actions/plansActions';

const useUpdatePlanAPi = () => {
  const dispatch = useDispatch();
  const [planUpdatingStatus, setPlanUpdatingStatus] = React.useState('initial');
  const [updatePlanResponse, setUpdatePlanResponse] = React.useState(null);
  const [updatePlanError, setUpdatePlanError] = React.useState(null);

  const updatePlan = async (payload) => {
    setPlanUpdatingStatus('loading');
    try {
      const response = await updatePlanApi(payload);
      setPlanUpdatingStatus('success');
      setUpdatePlanResponse(response.data);
      dispatch(getAllPlans());
    } catch (error) {
      setPlanUpdatingStatus('error');
      setUpdatePlanError(error.message);
    }
  };

  return {updatePlan, planUpdatingStatus, updatePlanResponse, updatePlanError};
};

export default useUpdatePlanAPi;
