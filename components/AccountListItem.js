import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function AccountListItem({
  navigation,
  item,
  deleteAccount,
}) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('AccountDetailsScreen', item)
      }
    >
      <View style={styles.container}>
        <Text style={styles.itemName}>{item.name}</Text>
        <View style={styles.icons}>
          <MaterialIcons
            name="edit"
            size={24}
            style={styles.modalToggle}
          />

          <MaterialIcons
            name="delete"
            size={24}
            style={styles.modalToggle}
            onPress={deleteAccount}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemName: {
    color: '#00A444',
    fontWeight: 'bold',
    fontSize: 18,
  },
  active: {
    backgroundColor: '#00A444',
    color: '#FFF',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 12,
    margin: 4,
    borderColor: '#808080',
    borderWidth: 2,
    borderRadius: 6,
  },
  icons: {
    flexDirection: 'row',
  },
  modalToggle: {
    color: '#00A444',
    textAlign: 'right',
    marginHorizontal: 2,
  },
});
