import { firebase } from '../firebase/config';

export default deleteAccount = function (item, userID) {
  firebase
    .firestore()
    .collection('users')
    .doc(userID)
    .collection('accounts')
    .doc(item)
    .delete()
    .catch((error) => alert(error));
};
