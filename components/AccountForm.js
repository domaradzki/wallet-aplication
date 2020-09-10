import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Picker,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import SubmitButton from './SubmitButton';

const schema = yup.object({
  name: yup.string().required().min(3),
  type: yup.string().required(),
  accountNumber: yup.string().min(26),
  balance: yup.string(),
});

export default function AccountForm({ addNew }) {
  const [selectedValue, setSelectedValue] = useState(
    'Choose account type',
  );
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: '',
          type: '',
          accountNumber: '',
          balance: '',
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addNew({ ...values, isActive: false });
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Account Name"
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            />
            <Text style={styles.error}>
              {props.touched.name && props.errors.name}
            </Text>
            <View style={{ ...styles.input, ...styles.picker }}>
              <Picker
                value={props.values.type}
                selectedValue={props.values.type}
                placeholder="Account Type"
                mode="dropdown"
                onValueChange={(itemValue) => {
                  props.values.type = itemValue;
                  setSelectedValue(itemValue);
                }}
              >
                <Picker.Item
                  label="Choose account type"
                  value="default"
                  color="#BEBEBE"
                />
                <Picker.Item
                  label="Cash"
                  value="Cash"
                  color="#00A444"
                />
                <Picker.Item
                  label="Main Bank Account"
                  value="Main Bank Account"
                  color="#00A444"
                />
                <Picker.Item
                  label="Credit Card"
                  value="Credit Card"
                  color="#00A444"
                />
                <Picker.Item
                  label="Savings Account"
                  value="Savings Account"
                  color="#00A444"
                />
                <Picker.Item
                  label="Loan"
                  value="Loan"
                  color="#00A444"
                />
                <Picker.Item
                  label="Mortage"
                  value="Mortage"
                  color="#00A444"
                />
              </Picker>
            </View>
            <Text style={styles.error}>
              {props.touched.type && props.errors.type}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Account Number"
              onChangeText={props.handleChange('accountNumber')}
              value={props.values.accountNumber}
              keyboardType="numeric"
            />
            <Text style={styles.error}>
              {props.touched.accountNumber &&
                props.errors.accountNumber}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Account Balance"
              onChangeText={props.handleChange('balance')}
              value={props.values.balance}
              keyboardType="numeric"
            />
            <Text style={styles.error}>
              {props.touched.balance && props.errors.balance}
            </Text>
            <SubmitButton
              onPress={props.handleSubmit}
              text="submit"
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#F2F2F2',
    marginBottom: 4,
    padding: 12,
    fontSize: 18,
    borderRadius: 6,
    color: '#00A444',
  },
  picker: {
    padding: 0,
    color: '#00A444',
  },
  error: {
    color: '#B22222',
    fontWeight: 'bold',
    marginBottom: 6,
    marginTop: 4,
  },
});
