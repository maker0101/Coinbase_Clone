import { AuthError, AuthLayout, Button, SignInForm, Text } from '../components';
import { useContext, useEffect } from 'react';

import { UserContext } from '../contexts/UserContext';
import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const { user, setUser } = useContext(UserContext);
  const { handleSignIn, authError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/assets');
  }, [user]);

  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

  return (
    <AuthLayout>
      <Text h1 color='white' size='xxl'>
        Sign in to Coinbase Clone
      </Text>
      <Button color='secondary' onClick={() => handleSignIn('guest')}>
        Continue as guest
      </Button>
      <Text color='white'>OR</Text>
      <SignInForm />
      {authError && <AuthError />}
    </AuthLayout>
  );
};

export default SignIn;
