import 'react-native-gesture-handler';
import React, { useEffect, useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { YellowBox } from 'react-native';
import { decode, encode } from 'base-64';

import RootStack from './routes/RootStack';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import { AuthContext } from './context/authContext';
import { firebase } from './firebase/config';

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

export default function App() {
  YellowBox.ignoreWarnings(['Setting a timer']);

  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => {
    return {
      signIn: (email, password) => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((response) => {
            const { uid } = response.user;
            const usersRef = firebase.firestore().collection('users');
            usersRef
              .doc(uid)
              .get()
              .then((firestoreDocument) => {
                if (!firestoreDocument.exists) {
                  alert('User does not exist anymore');
                  return;
                }
                const user = firestoreDocument.data();
                // navigation.navigate('App', { user: user });
                setIsLoading(false);
                setUserToken(user);
              })
              .catch((error) => {
                setIsLoading(false);
                setUserToken(null);
                alert(error);
              });
          })
          .catch((error) => {
            setIsLoading(false);
            setUserToken(null);
            alert(error);
          });
      },
      signUp: (email, fullName, password, confirmPassword) => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((response) => {
            const uid = response.user.uid;
            const data = {
              id: uid,
              email,
              fullName,
            };
            const usersRef = firebase.firestore().collection('users');
            usersRef
              .doc(uid)
              .set(data)
              .then(() =>
                // navigation.navigate('App', { user: data })
                {
                  setIsLoading(false);
                  setUserToken(data);
                },
              )
              .catch((error) => {
                setIsLoading(false);
                setUserToken(null);
                alert(error);
              });
          })
          .catch((error) => {
            {
              setIsLoading(false);
              setUserToken(null);
              alert(error);
            }
          });
      },
      signOut: () => {
        firebase
          .auth()
          .signOut()
          .then(() => {
            setIsLoading(false);
            setUserToken(null);
          })
          .catch((error) => {
            setIsLoading(false);
            alert(error);
          });
      },
    };
  }, []);

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((doc) => {
            const userData = doc.data();
            setIsLoading(false);
            setUserToken(userData);
          })
          .catch((error) => {
            setIsLoading(false);
          });
      } else {
        setIsLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return <AuthLoadingScreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStack userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
