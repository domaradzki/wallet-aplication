import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';

import Card from '../components/Card';
import AccountListItem from '../components/AccountListItem';

export default function AccountListScreen({ navigation, route }) {
  const data = route.params.data;
  return (
    <Card>
      <View>
        <View style={styles.top}>
          <Text style={styles.title}>Choose account to edit</Text>
        </View>
        <View>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <AccountListItem item={item} navigation={navigation} />
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
