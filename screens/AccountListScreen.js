import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';

import Card from '../components/Card';
import AccountListItem from '../components/AccountListItem';
import deleteAccount from '../services/deleteAccount';

export default function AccountListScreen({ navigation, route }) {
  const data = route.params.data;
  const user = route.params.user;
  const [accountsData, setAccountsData] = useState(data);

  const handleDelete = (item, userID) => {
    deleteAccount(item, userID);
    setAccountsData((prevState) => {
      return prevState.filter((account) => account.id !== item);
    });
  };
  return (
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
              />
            )}
          />
        </View>
      </View>
    </Card>
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
