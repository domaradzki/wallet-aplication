import React from 'react';
import { StyleSheet, Image } from 'react-native';

export default function Logo() {
  return (
    <Image
      style={styles.logo}
      source={require('../assets/wallet_logo.png')}
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    height: 120,
    width: 120,
    alignSelf: 'center',
    margin: 30,
  },
});
