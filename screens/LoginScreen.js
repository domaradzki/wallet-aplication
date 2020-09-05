import React, { useContext } from 'react';
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

import { AuthContext } from '../context/authContext';

import SubmitButton from '../components/SubmitButton';
import Logo from '../components/Logo';

const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required().min(6),
});

export default function LoginScreen({ navigation }) {
  const onFooterLinkPress = () => {
    navigation.navigate('Registration');
  };
  const { signIn } = useContext(AuthContext);
  const onLoginPress = (val) => {
    const { email, password } = val;
    signIn(email, password);
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
            initialValues={{ email: '', password: '' }}
            validationSchema={schema}
            onSubmit={(values, actions) => {
              actions.resetForm();
              onLoginPress(values);
            }}
          >
            {(props) => (
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="E-mail"
                  placeholderTextColor="#aaaaaa"
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                />
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#aaaaaa"
                  secureTextEntry
                  placeholder="Password"
                  onChangeText={props.handleChange('password')}
                  value={props.values.password}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                />
                <SubmitButton
                  onPress={props.handleSubmit}
                  text="Log in"
                />
              </View>
            )}
          </Formik>

          <View style={styles.footerView}>
            <Text style={styles.footerText}>
              Don't have an account?{' '}
              <Text
                onPress={onFooterLinkPress}
                style={styles.footerLink}
              >
                Sign up
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
  input: {
    height: 48,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: '#F2F2F2',
    marginBottom: 4,
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
});
