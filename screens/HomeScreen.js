import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import AccountContainer from '../components/AccountContainer';
import Card from '../components/Card';
import AddAccountScreen from './AddAccountScreen';

import { AuthContext } from '../context/authContext';
import { firebase } from '../firebase/config';
import AuthLoadingScreen from './AuthLoadingScreen';
import activeAccount from '../services/activeAccount';
import addAccount from '../services/addAccount';
import AddButton from '../components/AddButton';
import AddOperation from './AddOperation';

export default function Home(props) {
  const { navigation } = props;
  const { userToken } = useContext(AuthContext);
  const userID = userToken.id;
  const userRef =
    userID && firebase.firestore().collection('users').doc(userID);
  const [modalAddAccountOpen, setModalAddAccountOpen] = useState(
    false,
  );
  const [modalOperationOpen, setModalOperationOpen] = useState(false);
  const [accounts, setAccounts] = useState([]);

  const balance = accounts
    .map((item) => parseFloat(item.balance))
    .reduce((prev, next) => {
      return prev + next;
    }, 0);

  const activeBalance = accounts
    .map((item) => (item.isActive ? parseFloat(item.balance) : 0))
    .reduce((prev, next) => {
      return prev + next;
    }, 0);

  useEffect(() => {
    if (userRef) {
      userRef.collection('accounts').onSnapshot(
        (querySnapshot) => {
          const newAccounts = [];
          querySnapshot.forEach((doc) => {
            const newAccount = doc.data();
            newAccount.id = doc.id;
            newAccounts.push(newAccount);
          });
          setAccounts(newAccounts);
        },
        (error) => {
          console.log(error);
        },
      );
    }
  }, [userID]);

  const addNewAccount = (account) => {
    addAccount(account, userID, setModalAddAccountOpen);
  };

  const activateAccount = (item, isActive) => {
    activeAccount(item, userID, isActive);
  };

  const addOperation = () => {
    console.log('operation');
  };

  if (!userToken) {
    return <AuthLoadingScreen />;
  }

  return (
    <View style={styles.container}>
      <AddAccountScreen
        open={modalAddAccountOpen}
        close={() => setModalAddAccountOpen(false)}
        addNew={addNewAccount}
      />
      <AddOperation
        open={modalOperationOpen}
        close={() => setModalOperationOpen(false)}
        addOperation={addOperation}
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
                  user: userID,
                })
              }
            />
          </View>
        </View>
        <View>
          <FlatList
            data={accounts}
            keyExtractor={(item, index) => item.id}
            numColumns={3}
            renderItem={({ item }) => (
              <AccountContainer
                key={item.id}
                item={item}
                navigation={navigation}
                activateAccount={activateAccount}
              />
            )}
          />
        </View>
        <Text
          style={{ ...styles.title, ...styles.right }}
        >{`Balace: ${balance} PLN`}</Text>
      </Card>
      <Card>
        <View>
          <Text
            style={{ ...styles.title }}
          >{`Active Balace: ${activeBalance} PLN`}</Text>
        </View>
      </Card>
      <AddButton onPress={() => setModalOperationOpen(true)} />
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
  right: {
    color: '#00A444',
    textAlign: 'right',
    marginHorizontal: 2,
    marginVertical: 10,
  },
});
