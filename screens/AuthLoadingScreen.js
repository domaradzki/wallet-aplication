import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

export default function AuthLoadingScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#00A444" />
      <StatusBar barStyle="default" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
