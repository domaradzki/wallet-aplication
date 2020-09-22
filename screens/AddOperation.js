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
import AmountInput from '../components/AmountInput';
import AmountDisplay from '../components/AmountDisplay';

export default function AddOperation({ open, close, addOperation }) {
  const [activeType, setActiveType] = useState('Expense');
  const [prevValue, setPrevValue] = useState(null);
  const [nextValue, setNextValue] = useState('0');
  const [op, setOp] = useState(null);

  const CalculatorOperations = {
    '÷': (firstValue, secondValue) => firstValue / secondValue,
    '*': (firstValue, secondValue) => firstValue * secondValue,
    '+': (firstValue, secondValue) => firstValue + secondValue,
    '-': (firstValue, secondValue) => firstValue - secondValue,
    '=': (firstValue, secondValue) => secondValue,
  };

  const performOperation = () => {
    let temp = CalculatorOperations[op](
      parseFloat(prevValue),
      parseFloat(nextValue),
    );
    setOp(null);
    setNextValue(String(temp));
    setPrevValue(null);
  };

  const handleNum = (number) => {
    setNextValue(
      nextValue === '0' ? String(number) : nextValue + number,
    );
  };

  const insertDot = () => {
    if (!/\./.test(nextValue)) {
      setNextValue(nextValue + '.');
    }
  };

  const clearData = () => {
    setNextValue('0');
    setPrevValue(0);
  };

  const handleOperation = (value) => {
    if (Number.isInteger(value)) {
      handleNum(parseInt(value, 10));
    } else if (value in CalculatorOperations) {
      if (op === null) {
        setOp(value);
        setPrevValue(nextValue);
        setNextValue('');
      }
      if (op) {
        setOp(value);
      }
      if (prevValue && op && nextValue) {
        performOperation();
      }
    } else if (value === 'c') {
      clearData();
    } else if (value === '.') {
      insertDot();
    }
  };

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
            <View style={styles.container}>
              <OperationType
                activeType={activeType}
                setActiveType={(item) => setActiveType(item)}
              />
              <AmountDisplay amount={nextValue} />
              <AmountInput
                handleOperation={(e) => handleOperation(e)}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Card>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
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
  },
});
