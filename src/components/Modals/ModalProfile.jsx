import './ModalProfile.css';

import { Button, Modal, ModalClose, Text } from '..';

import Avvvatars from 'avvvatars-react';
import { UserContext } from '../../contexts/UserContext';
import useAuth from '../../hooks/useAuth';
import { useContext } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';

const ModalProfile = () => {
  const isWidthMax800 = useMediaQuery('(max-width: 800px)');
  const { user } = useContext(UserContext);
  const { signout } = useAuth();

  return (
    <Modal>
      <div className='ModalProfile__content'>
        <Text h1>Profile</Text>
        <Avvvatars value={user?.email || 'Guest'} size={72} />
        <Text className='ModalProfile__userName'>{user?.email || 'Guest'}</Text>
        <Button onClick={signout} size='xl'>
          Log out
        </Button>
        {isWidthMax800 && <ModalClose />}
      </div>
    </Modal>
  );
};

export default ModalProfile;
