import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function AccountContainer({
  navigation,
  item,
  activateAccount,
}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => activateAccount(item.key)}
    >
      <Text
        style={
          item.isActive
            ? { ...styles.item, ...styles.active }
            : styles.item
        }
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    margin: 4,
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 6,
    color: '#00A444',
  },
  active: {
    backgroundColor: '#00A444',
    color: '#FFF',
  },
});
