import * as React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {defaultTheme} from './themes';
import store from './store';
import PublicRoutes from './routes/PublicRoutes';
import Toast from 'react-native-easy-toast';
import {toasterRef} from './utils/Toaster';

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={defaultTheme}>
        <PublicRoutes />
        <Toast ref={(toast) => (toasterRef.current = toast)} />
      </PaperProvider>
    </StoreProvider>
  );
}
