import './AuthError.css';
import { RiErrorWarningFill } from 'react-icons/ri';
import useAuth from '../../hooks/useAuth';
import { Text } from '../index';

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
