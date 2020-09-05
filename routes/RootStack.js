import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AppDrawer from './AppDrawer';
import AuthStack from './AuthStack';
import Header from '../components/Header';

const RootStack = createStackNavigator();

export default function Rootstack({ userToken }) {
  return (
    <RootStack.Navigator>
      {userToken ? (
        <RootStack.Screen
          name="App"
          component={AppDrawer}
          options={({ navigation }) => {
            return {
              headerTitle: () => (
                <Header title="Wallet" navigation={navigation} />
              ),
              headerStyle: {
                height: 80,
                backgroundColor: '#00A444',
              },
              headerTintColor: '#FFF',
            };
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStack}
          options={{
            animationEnabled: false,
            title: 'Login or Register to the Wallet',
            headerStyle: {
              height: 80,
              backgroundColor: '#00A444',
            },
            headerTintColor: '#FFF',
          }}
        />
      )}
    </RootStack.Navigator>
  );
}
