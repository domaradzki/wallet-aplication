import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const types = ['Income', 'Expense', 'Transfer'];

export default function OperationType({ activeType, setActiveType }) {
  return (
    <View style={styles.container}>
      {types.map((item) => (
        <TouchableOpacity
          key={item}
          id={item}
          onPress={() => setActiveType(item)}
          style={
            activeType === item
              ? { ...styles.button, ...styles.active }
              : styles.button
          }
        >
          <Text
            style={
              activeType === item
                ? { ...styles.buttonText, ...styles.activeText }
                : styles.buttonText
            }
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#00A444',
    paddingHorizontal: 30,
    paddingVertical: 8,

    marginLeft: 2,
    marginRight: 2,
    marginTop: 20,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#00A444',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  active: {
    backgroundColor: '#00A444',
  },
  activeText: {
    color: '#FFF',
  },
});
