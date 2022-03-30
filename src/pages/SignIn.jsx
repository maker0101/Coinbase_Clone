import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
import { UserContext } from '../contexts/UserContext';
import useAuth from '../hooks/useAuth';
import { AuthLayout, AuthForm, AuthError, Text, Button } from '../components';

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
      <AuthForm isSignin />
      {authError && <AuthError />}
    </AuthLayout>
  );
};

export default SignIn;
