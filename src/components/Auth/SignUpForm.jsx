import './SignUpForm.css';

import { Button, Input, Text } from '../index';
import { useContext, useEffect } from 'react';

import { UserContext } from '../../contexts/UserContext';
import { auth } from '../../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const { user, setUser } = useContext(UserContext);
  const {
    signUpEmail,
    setSignUpEmail,
    signUpPassword,
    setSignUpPassword,
    handleSignUp,
  } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/assets');
  }, [user]);

  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

  return (
    <form className='SignUpForm' onSubmit={(e) => handleSignUp('email', e)}>
      <Input
        type='email'
        name='email'
        autoComplete='email'
        placeholder='Email'
        required
        value={signUpEmail}
        onChange={(e) => setSignUpEmail(e.target.value)}
      />
      <Input
        type='password'
        name='password'
        autoComplete='current-password'
        placeholder='Password'
        required
        minLength={6}
        value={signUpPassword}
        onChange={(e) => setSignUpPassword(e.target.value)}
      />
      <Button type='submit'>Sign up with Email</Button>
      <Text>
        Already signed up? <a href='/signin'>Go to log in</a>
      </Text>
    </form>
  );
};

export default SignUpForm;
