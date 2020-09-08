import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';

export default function AccountDetailsScreen({ route }) {
  return (
    <Card>
      <View style={styles.container}>
        <Card>
          <Text style={styles.title}>
            {`Name: ${route.params?.name ?? 'name'}`}
          </Text>
        </Card>
        <Card>
          <Text style={styles.title}>
            {`Type: ${route.params?.type ?? 'type'}`}
          </Text>
        </Card>
        <Card>
          <Text style={styles.title}>
            {`Number: ${
              route.params?.accountNumber ??
              '12 1234 1234 1234 1234 1234 1234'
            }`}
          </Text>
        </Card>
        <Card>
          <Text style={styles.title}>
            {`Balance: ${route.params?.balance ?? '0'}`} PLN
          </Text>
        </Card>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
  },
  content: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 6,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  title: {
    color: '#00A444',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20,
    textAlign: 'left',
  },
});
