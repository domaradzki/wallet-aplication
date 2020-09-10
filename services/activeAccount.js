import { firebase } from '../firebase/config';

export default activeAccount = function (item, userID, isActive) {
  const userRef =
    userID && firebase.firestore().collection('users').doc(userID);
  userRef
    .collection('accounts')
    .doc(item)
    .update({ isActive: !isActive })
    .catch((error) => alert(error));
};
