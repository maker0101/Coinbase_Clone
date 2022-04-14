import './AuthError.css';

import { RiErrorWarningFill } from 'react-icons/ri';
import { Text } from '../index';
import useAuth from '../../hooks/useAuth';

const AuthError = () => {
  const { authError } = useAuth();

  return (
    <div className='AuthError'>
      <RiErrorWarningFill />
      <Text color='white'>{authError}</Text>
    </div>
  );
};

export default AuthError;
