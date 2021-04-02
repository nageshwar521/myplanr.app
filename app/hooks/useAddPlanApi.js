import React from 'react';
import {useDispatch} from 'react-redux';
import {addPlanApi} from '../services/ApiService';
import {getAllPlans} from '../store/actions/plansActions';

const useAddPlanAPi = () => {
  const dispatch = useDispatch();
  const [planAddingStatus, setPlanAddingStatus] = React.useState('initial');
  const [addPlanResponse, setAddPlanResponse] = React.useState(null);
  const [addPlanError, setAddPlanError] = React.useState(null);

  const addPlan = async (payload) => {
    setPlanAddingStatus('loading');
    try {
      const response = await addPlanApi(payload);
      setPlanAddingStatus('success');
      setAddPlanResponse(response.data);
      dispatch(getAllPlans());
    } catch (error) {
      setPlanAddingStatus('error');
      setAddPlanError(error.message);
    }
  };

  return {addPlan, planAddingStatus, addPlanResponse, addPlanError};
};

export default useAddPlanAPi;
