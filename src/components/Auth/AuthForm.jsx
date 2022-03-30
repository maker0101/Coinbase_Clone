import './AuthForm.css';
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { UserContext } from '../../contexts/UserContext';
import useAuth from '../../hooks/useAuth';
import { Button, Text, Input } from '../index';

const AuthForm = ({ isSignin = false }) => {
  const { user, setUser } = useContext(UserContext);
  const {
    handleSignIn,
    signInEmail,
    setSignInEmail,
    signInPassword,
    setSignInPassword,
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
    <form
      className='AuthForm'
      onSubmit={(e) =>
        isSignin ? handleSignIn('email', e) : handleSignUp('email', e)
      }>
      <Input
        type='email'
        name='email'
        autoComplete='email'
        placeholder='Email'
        required
        value={isSignin ? signInEmail : signUpEmail}
        onChange={(e) =>
          isSignin
            ? setSignInEmail(e.target.value)
            : setSignUpEmail(e.target.value)
        }
      />
      <Input
        type='password'
        name='password'
        autoComplete='current-password'
        placeholder='Password'
        required
        minLength={isSignin ? 0 : 6}
        value={isSignin ? signInPassword : signUpPassword}
        onChange={(e) =>
          isSignin
            ? setSignInPassword(e.target.value)
            : setSignUpPassword(e.target.value)
        }
      />
      <Button type='submit'>
        {isSignin ? 'Sign in with Email' : 'Sign up with Email'}
      </Button>
      {isSignin ? (
        <Text>
          Don't have an account yet? <a href='/signup'>Sign up</a>
        </Text>
      ) : (
        <Text>
          Already signed up? <a href='/signin'>Go to log in</a>
        </Text>
      )}
    </form>
  );
};

export default AuthForm;
