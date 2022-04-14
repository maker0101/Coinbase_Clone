import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInAnonymously,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { useContext, useState } from 'react';

import { UserContext } from '../contexts/UserContext';
import { auth } from '../firebase-config';

const useAuth = () => {
  const { setUser, authError, setAuthError } = useContext(UserContext);
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const handleSignIn = async (signInMethod, e = {}) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    try {
      switch (signInMethod) {
        case 'email':
          e.preventDefault();
          await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
          setAuthError('');
          break;

        case 'guest':
          await signInAnonymously(auth);
          setAuthError('');
          break;

        default:
          return;
      }
    } catch (error) {
      setAuthError(error?.code);
      console.error(error?.code);
    }
  };

  const handleSignUp = async (signUpMethod, event = {}) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    try {
      switch (signUpMethod) {
        case 'email':
          event.preventDefault();
          await createUserWithEmailAndPassword(
            auth,
            signUpEmail,
            signUpPassword
          );
          setAuthError('');
          break;

        case 'guest':
          await signInAnonymously(auth);
          setAuthError('');
          break;

        default:
          return;
      }
    } catch (error) {
      setAuthError(error?.code);
      console.error(error?.code);
    }
  };

  const signout = () => signOut(auth);

  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

  return {
    signInEmail,
    setSignInEmail,
    signInPassword,
    setSignInPassword,
    signUpEmail,
    setSignUpEmail,
    signUpPassword,
    setSignUpPassword,
    authError,
    setAuthError,
    handleSignIn,
    handleSignUp,
    signout,
  };
};

export default useAuth;
