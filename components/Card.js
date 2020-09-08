import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    padding: 14,
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 6,
    marginHorizontal: 5,
    marginVertical: 5,
  },
});
