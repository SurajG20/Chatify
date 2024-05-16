import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

const getAuth = onAuthStateChanged(auth, (user) => {
  if (user) {
    return user;
  } else {
    console.log('User Logged Out');
    return null;
  }
});

export default getAuth;
