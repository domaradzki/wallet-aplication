import 'react-native-gesture-handler';
import React, { useState } from 'react';
import Navigator from './routes/Drawer';

export default function App() {
  // YellowBox.ignoreWarnings(['Setting a timer']);

  const [user, setUser] = useState(null);

  return <Navigator />;
}
