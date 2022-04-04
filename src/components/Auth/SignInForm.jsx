import './SignInForm.css';
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { UserContext } from '../../contexts/UserContext';
import useAuth from '../../hooks/useAuth';
import { Button, Text, Input } from '../index';

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
