import { firebase } from '../firebase/config';

export default addAccount = function (
  account,
  userID,
  setModalAddAccountOpen,
) {
  const userRef =
    userID && firebase.firestore().collection('users').doc(userID);
  userRef
    .collection('accounts')
    .add(account)
    .then((_doc) => {
      setModalAddAccountOpen(false);
    })
    .catch((error) => {
      alert(error);
    });
};
