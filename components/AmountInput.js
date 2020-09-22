import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const mainInputs = [7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0, 'c'];

const signInputs = ['÷', '*', '-', '+', '='];

export default function AmountInput({ handleOperation }) {
  return (
    <View style={styles.container}>
      <View style={styles.numbers}>
        {mainInputs.map((item) => (
          <TouchableOpacity
            key={item}
            id={item}
            style={styles.button}
            onPress={() => handleOperation(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity id="enter" style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signs}>
        {signInputs.map((item) => (
          <TouchableOpacity
            key={item}
            id={item}
            style={styles.button}
            onPress={() => handleOperation(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'stretch',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  numbers: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 3,
    flexWrap: 'wrap',
    marginTop: 20,
  },
  signs: {
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  button: {
    flex: 1,
    minWidth: '20%',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#00A444',
    paddingHorizontal: 25,
    paddingVertical: 20,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 5,
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
