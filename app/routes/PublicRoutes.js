import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/Login';
import {navigationRef} from '../utils/RootNavigation';
import DrawerRoutes from './DrawerRoutes';

function SignUpScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>SignUp Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function PublicRoutes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={DrawerRoutes} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default PublicRoutes;
