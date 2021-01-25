import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function AmountDisplay({ amount, sign }) {
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displaySign}>{sign}</Text>
      </View>
      <View style={styles.display}>
        <Text style={styles.displayText}>{amount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '20%',
    backgroundColor: '#00A444',
    marginVertical: 30,
    marginHorizontal: 20,
    borderRadius: 6,
  },
  display: {
    marginVertical: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayText: {
    color: '#FFF',
    textAlign: 'right',
    fontSize: 32,
  },
  displaySign: {
    color: '#FFF',
    textAlign: 'left',
    fontSize: 40,
  },
});
