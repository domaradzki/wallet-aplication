import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function AmountDisplay({ amount }) {
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{amount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    minHeight: '20%',
    backgroundColor: '#00A444',
    marginVertical: 30,
    marginHorizontal: 20,
    borderRadius: 6,
  },
  display: {
    marginVertical: 30,
    marginHorizontal: 20,
  },
  displayText: {
    color: '#FFF',
    textAlign: 'right',
    fontSize: 32,
  },
});
