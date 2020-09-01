import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RegistrationScreen from '../screens/RegistrationScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

export default function LoginStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Log in to your Wallet',
          headerStyle: {
            height: 80,
            backgroundColor: '#00A444',
          },
          headerTintColor: '#FFF',
        }}
      />
      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{
          title: 'Register in a Wallet',
          headerStyle: {
            height: 80,
            backgroundColor: '#00A444',
          },
          headerTintColor: '#FFF',
        }}
      />
    </Stack.Navigator>
  );
}
