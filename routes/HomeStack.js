import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import Header from '../components/Header';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
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
