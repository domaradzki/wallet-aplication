import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function SubmitButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 16,
    backgroundColor: '#00A444',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
