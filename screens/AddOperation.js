import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Card from '../components/Card';
import OperationType from '../components/OperationType';

export default function AddOperation({ open, close, addOperation }) {
  const [activeType, setActiveType] = useState('Expense');
  return (
    <Modal visible={open} animationType="slide">
      <Card>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View style={styles.top}>
              <Text style={styles.title}>Add new operation</Text>
              <View style={styles.icons}>
                <MaterialIcons
                  name="close"
                  size={24}
                  style={styles.modalToggle}
                  onPress={close}
                />
              </View>
            </View>
            <View>
              <OperationType
                activeType={activeType}
                setActiveType={(item) => setActiveType(item)}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Card>
    </Modal>
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
  icons: {
    flexDirection: 'row',
  },
  modalToggle: {
    color: '#00A444',
    textAlign: 'right',
  },
});
