import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import AccountContainer from '../components/AccountContainer';
import Card from '../components/Card';
import AddAccountScreen from './AddAccountScreen';

import { AuthContext } from '../context/authContext';

export default function Home(props) {
  const { navigation } = props;
  const { userToken } = useContext(AuthContext);
  const [modalAddAccountOpen, setModalAddAccountOpen] = useState(
    false,
  );
  const [accounts, setAccounts] = useState([
    {
      name: 'Cash',
      type: 'cash',
      accountNumber: '',
      balance: 0,
      key: '1',
      isActive: true,
    },
    {
      name: 'Bank Account',
      type: 'main',
      accountNumber: '',
      balance: 0,
      key: '2',
      isActive: false,
    },
  ]);
  const addNewAccount = (account) => {
    account.key = Math.random().toString();
    setAccounts((prevAccounts) => {
      return [account, ...prevAccounts];
    });
    setModalAddAccountOpen(false);
  };

  const activateAccount = (item) => {
    setAccounts((prevAccounts) => {
      return prevAccounts.map((account) =>
        account.key !== item
          ? account
          : {
              ...account,
              isActive: !account.isActive,
            },
      );
    });
  };

  return (
    <View style={styles.container}>
      <AddAccountScreen
        open={modalAddAccountOpen}
        close={() => setModalAddAccountOpen(false)}
        addNew={addNewAccount}
      />

      <Card>
        <View style={styles.top}>
          <Text style={styles.title}>Accounts</Text>
          <View style={styles.icons}>
            <MaterialIcons
              name="add-circle"
              size={24}
              style={styles.modalToggle}
              onPress={() => setModalAddAccountOpen(true)}
            />

            <MaterialIcons
              name="settings"
              size={24}
              style={styles.modalToggle}
              onPress={() =>
                navigation.navigate('AccountListScreen', {
                  data: accounts,
                })
              }
            />
          </View>
        </View>
        <View>
          <FlatList
            data={accounts}
            numColumns={3}
            renderItem={({ item }) => (
              <AccountContainer
                item={item}
                navigation={navigation}
                activateAccount={activateAccount}
              />
            )}
          />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
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
  icons: {
    flexDirection: 'row',
  },
  modalToggle: {
    color: '#00A444',
    textAlign: 'right',
    marginHorizontal: 2,
  },
});
