export const initialState = {
  auth: {
    isLoggedIn: false,
    isLoginLoading: false,
    loginError: null,
  },
  plans: {
    plans: [],
    isPlansLoading: false,
    plansError: null,
  },
  common: {
    status: 'initial',
    modalOptions: {
      isModalVisible: false,
      loadingText: 'Loading...',
    },
    toasterOptions: {
      isToasterVisible: false,
      toasterMessage: '',
      autoHideToaster: true,
      toasterTimeout: 2000,
    },
  },
  profile: null,
};
