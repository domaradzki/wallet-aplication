import React, { useState } from 'react';
import { StyleSheet, View, Picker } from 'react-native';

export default function AccountPicker({
  accounts,
  selectedValue,
  setSelectedValue,
  defaultAccountName,
}) {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.input, ...styles.picker }}>
        <Picker
          value={defaultAccountName}
          selectedValue={defaultAccountName}
          mode="dropdown"
          onValueChange={(itemValue) => {
            setSelectedValue(itemValue);
          }}
        >
          {accounts
            .sort((account) => account.isActive === false)
            .map((account) => (
              <Picker.Item
                key={account.id}
                label={account.name}
                value={account.name}
                color="#00A444"
              />
            ))}
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#00A444',
    marginBottom: 4,
    padding: 8,
    fontSize: 16,
    borderRadius: 6,
    color: '#00A444',
  },
  picker: {
    padding: 0,
    color: '#00A444',
  },
});
