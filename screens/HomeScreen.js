import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../context/authContext';

export default function HomeScreen({ navigation }) {
  const { userToken } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Welcome {userToken?.fullName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});
