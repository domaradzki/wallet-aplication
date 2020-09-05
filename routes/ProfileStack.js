import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screens/ProfileScreen';
import Header from '../components/Header';

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
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
    </Stack.Navigator>
  );
}
