import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';

const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#00A444',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Profile"
        component={ProfileStack}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default AppDrawer;
