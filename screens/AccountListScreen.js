import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';

import Card from '../components/Card';
import AccountListItem from '../components/AccountListItem';
import deleteAccount from '../services/deleteAccount';
import EditAccountScreen from './EditAccountScreen';
import updateAccount from '../services/updateAccount';

export default function AccountListScreen({ navigation, route }) {
  const data = route.params.data;
  const user = route.params.user;
  const [accountsData, setAccountsData] = useState(data);
  const [modalEditAccountOpen, setModalEditAccountOpen] = useState(
    false,
  );
  const [editItem, setEditItem] = useState(null);

  const handleDelete = (item, userID) => {
    deleteAccount(item, userID);
    setAccountsData((prevState) => {
      return prevState.filter((account) => account.id !== item);
    });
  };

  const editAccount = ({ values }) => {
    const { id, accountNumber, balance, name, type } = values;
    const itemsToUpdate = { accountNumber, balance, name, type };
    setAccountsData((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, ...itemsToUpdate } : item,
      ),
    );
    updateAccount(itemsToUpdate, id, user, setModalEditAccountOpen); //service
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setModalEditAccountOpen(true);
  };
  return (
    <>
      <EditAccountScreen
        open={modalEditAccountOpen}
        close={() => setModalEditAccountOpen(false)}
        edit={editAccount}
        editItem={editItem}
      />
      <Card>
        <View>
          <View style={styles.top}>
            <Text style={styles.title}>Choose account to edit</Text>
          </View>
          <View>
            <FlatList
              data={accountsData}
              extraData={accountsData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <AccountListItem
                  key={item.id}
                  item={item}
                  navigation={navigation}
                  deleteAccount={() => handleDelete(item.id, user)}
                  edit={() => handleEdit(item)}
                />
              )}
            />
          </View>
        </View>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#00A444',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
