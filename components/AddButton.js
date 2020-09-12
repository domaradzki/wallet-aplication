import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function AddButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <MaterialIcons
        name="add-circle"
        size={64}
        style={styles.button}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    color: '#00A444',
  },
  container: {
    position: 'absolute',
    right: 15,
    bottom: 15,
  },
});
