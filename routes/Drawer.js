import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './HomeStack';
import LoginStack from './LoginStack';

const Drawer = createDrawerNavigator();

function Navigator() {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      {user ? (
        <Drawer.Navigator>
          <Drawer.Screen
            name="Home"
            component={HomeStack}
          ></Drawer.Screen>
        </Drawer.Navigator>
      ) : (
        <LoginStack />
      )}
    </NavigationContainer>
  );
}

export default Navigator;
