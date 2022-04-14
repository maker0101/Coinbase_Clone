import './SignInForm.css';

import { Button, Input, Text } from '../index';
import { useContext, useEffect } from 'react';

import { UserContext } from '../../contexts/UserContext';
import { auth } from '../../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
  const { user, setUser } = useContext(UserContext);
  const {
    handleSignIn,
    signInEmail,
    setSignInEmail,
    signInPassword,
    setSignInPassword,
  } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/assets');
  }, [user]);

  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

  return (
    <form className='SignInForm' onSubmit={(e) => handleSignIn('email', e)}>
      <Input
        type='email'
        name='email'
        autoComplete='email'
        placeholder='Email'
        required
        value={signInEmail}
        onChange={(e) => setSignInEmail(e.target.value)}
      />
      <Input
        type='password'
        name='password'
        autoComplete='current-password'
        placeholder='Password'
        required
        value={signInPassword}
        onChange={(e) => setSignInPassword(e.target.value)}
      />
      <Button type='submit'>Sign in with Email</Button>
      <Text>
        Don't have an account yet? <a href='/signup'>Sign up</a>
      </Text>
    </form>
  );
};

export default SignInForm;
