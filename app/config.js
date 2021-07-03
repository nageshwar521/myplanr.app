const isDevEnv = true; // process.env.NODE_ENV === 'development';
const network_ip = '192.168.225.182';

// console.log('isDevEnv');
// console.log(isDevEnv);

export default {
  // App Details
  appName: 'MyPlanrApp',

  // Build Configuration - eg. Debug or Release?
  isDevEnv,

  // Date Format
  dateFormat: 'Do MMM YYYY',
  dbDateFormat: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",

  // API
  apiBaseUrl: isDevEnv
    ? `http://${network_ip}:7000`
    : 'https://myplanr.netlify.app/.netlify/functions/server',

  // Google Analytics - uses a 'dev' account while we're testing
  gaTrackingId: isDevEnv ? 'UA-84284256-2' : 'UA-84284256-1',
};
