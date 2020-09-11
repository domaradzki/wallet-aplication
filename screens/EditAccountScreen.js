import React from 'react';
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
import EditForm from '../components/EditForm';

export default function EditAccountScreen({
  open,
  close,
  edit,
  editItem,
}) {
  return (
    <Modal visible={open} animationType="slide">
      <Card>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View style={styles.top}>
              <Text style={styles.title}>Edit account</Text>
              <View style={styles.icons}>
                <MaterialIcons
                  name="close"
                  size={24}
                  style={styles.modalToggle}
                  onPress={close}
                />
              </View>
            </View>
            <EditForm edit={edit} editItem={editItem} />
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
