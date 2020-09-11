import { firebase } from '../firebase/config';

export default updateAccount = function (
  itemsToUpdate,
  item,
  userID,
  setModalEditAccountOpen,
) {
  const userRef =
    userID && firebase.firestore().collection('users').doc(userID);
  userRef
    .collection('accounts')
    .doc(item)
    .update(itemsToUpdate)
    .then((_doc) => {
      setModalEditAccountOpen(false);
    })
    .catch((error) => {
      alert(error);
    });
};
