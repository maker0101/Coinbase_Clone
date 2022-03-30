import { useContext } from 'react';
import { VscAccount } from 'react-icons/vsc';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { UserContext } from '../../contexts/UserContext';
import { Modal, ModalClose } from '..';
import useMediaQuery from '../../hooks/useMediaQuery';

const ModalProfile = () => {
  const isWidthMax800 = useMediaQuery('(max-width: 800px)');

  //TODO: move to useAuth and import fromm there
  const { user, setUser } = useContext(UserContext);
  const signout = () => signOut(auth);
  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

  return (
    <Modal>
      <div>Modal Profile</div>
      <div className='account'>
        <div className='account_row account_userInfo'>
          <VscAccount />
          {user?.email || 'Guest'}
        </div>
        <hr />
        <button onClick={signout}>Log out</button>
      </div>
      {isWidthMax800 && <ModalClose />}
    </Modal>
  );
};

export default ModalProfile;
