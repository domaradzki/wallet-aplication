import React from 'react';
import {
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ title }) {
  const navigation = useNavigation();
  const openMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={30}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.logotype}>
        <Text style={styles.title}>{title}</Text>
        <Image
          source={require('../assets/wallet_logo.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
  image: {
    width: 30,
    height: 30,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  logotype: {
    flexDirection: 'row',
  },
});
