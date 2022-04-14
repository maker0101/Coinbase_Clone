import { AuthError, AuthLayout, Button, SignUpForm, Text } from '../components';
import { useContext, useEffect } from 'react';

import { UserContext } from '../contexts/UserContext';
import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const { user, setUser } = useContext(UserContext);
  const { handleSignUp, authError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/assets');
  }, [user]);

  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

  return (
    <AuthLayout>
      <Text h1 color='white' size='xxl'>
        Sign up for Coinbase Clone
      </Text>
      <Button color='secondary' onClick={() => handleSignUp('guest')}>
        Continue as guest
      </Button>
      <Text color='white'>OR</Text>
      <SignUpForm />
      {authError && <AuthError />}
    </AuthLayout>
  );
};

export default SignUp;
