import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SubmitButton from '../components/SubmitButton';

import { AuthContext } from '../context/authContext';

export default function ProfileScreen() {
  const { signOut } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Your Profile</Text>
      <SubmitButton text="Sign Out" onPress={() => signOut()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});
