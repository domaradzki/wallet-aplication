import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import * as yup from 'yup';

import SubmitButton from '../components/SubmitButton';
import Logo from '../components/Logo';

const schema = yup.object({
  fullName: yup.string(),
  email: yup.string().required(),
  password: yup.string().required().min(6),
  confirmPassword: yup.string().required().min(6),
});

export default function RegistrationScreen({ navigation }) {
  const onFooterLinkPress = () => {
    navigation.navigate('Login');
  };

  const onRegisterPress = (val) => {
    console.log(val);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAwareScrollView
          style={{ flex: 1, width: '100%' }}
          keyboardShouldPersistTaps="always"
        >
          <Logo />

          <Formik
            initialValues={{
              fullName: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={schema}
            onSubmit={(values, actions) => {
              actions.resetForm();
              onRegisterPress(values);
            }}
          >
            {(props) => (
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Full Name"
                  placeholderTextColor="#aaaaaa"
                  onChangeText={props.handleChange('fullName')}
                  value={props.values.fullName}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  textContentType="name"
                />
                <Text style={styles.error}>
                  {props.touched.fullName && props.errors.fullName}
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="E-mail"
                  placeholderTextColor="#aaaaaa"
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  textContentType="emailAddress"
                />
                <Text style={styles.error}>
                  {props.touched.email && props.errors.email}
                </Text>
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#aaaaaa"
                  secureTextEntry
                  placeholder="Password"
                  onChangeText={props.handleChange('password')}
                  value={props.values.password}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  textContentType="password"
                />
                <Text style={styles.error}>
                  {props.touched.password && props.errors.password}
                </Text>
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#aaaaaa"
                  secureTextEntry
                  placeholder="Confirm Password"
                  onChangeText={props.handleChange('confirmPassword')}
                  value={props.values.confirmPassword}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  textContentType="password"
                />
                <Text style={styles.error}>
                  {props.touched.confirmPassword &&
                    props.errors.confirmPassword}
                </Text>
                <SubmitButton
                  onPress={props.handleSubmit}
                  text="Create account"
                />
              </View>
            )}
          </Formik>
          <View style={styles.footerView}>
            <Text style={styles.footerText}>
              Already got an account?{' '}
              <Text
                onPress={onFooterLinkPress}
                style={styles.footerLink}
              >
                Log in
              </Text>
            </Text>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    height: 120,
    width: 120,
    alignSelf: 'center',
    margin: 30,
  },
  input: {
    height: 48,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
    fontSize: 18,
    borderRadius: 6,
    color: '#00A444',
  },
  footerView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#2e2e2d',
  },
  footerLink: {
    color: '#00A444',
    fontWeight: 'bold',
    fontSize: 16,
  },
  error: {
    color: '#B22222',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
