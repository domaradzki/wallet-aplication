import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC6HwNzZcz7HwyhP5aawnghZf94QFuUA6U',
  authDomain: 'wallet-app-74a5b.firebaseapp.com',
  databaseURL: 'https://wallet-app-74a5b.firebaseio.com',
  projectId: 'wallet-app-74a5b',
  storageBucket: 'wallet-app-74a5b.appspot.com',
  messagingSenderId: '351773269553',
  appId: '1:351773269553:android:a14d7d5c83da565b9a7f10',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
