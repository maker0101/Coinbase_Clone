import './Footer.css';

import { Button } from '..';
import { ModalContext } from '../../contexts/ModalContext';
import { useContext } from 'react';
import usePath from '../../hooks/usePath';

const Footer = () => {
  const { page } = usePath();
  const { handleOpen } = useContext(ModalContext);

  return (
    <div className='Footer'>
      {['Assets', 'Trade'].includes(page) && (
        <>
          <Button onClick={() => handleOpen('trade')} stretch>
            Buy
          </Button>
          <Button onClick={() => handleOpen('trade', 2)} stretch>
            Sell
          </Button>
        </>
      )}
      {page === 'Pay' && (
        <>
          <Button onClick={() => handleOpen('pay')} stretch>
            Send
          </Button>
          <Button onClick={() => handleOpen('pay', 2)} stretch>
            Receive
          </Button>
        </>
      )}
      {page === 'Deposit' && (
        <>
          <Button onClick={() => handleOpen('deposit')} stretch>
            Add cash
          </Button>
          <Button onClick={() => handleOpen('deposit', 2)} stretch>
            Cashout
          </Button>
        </>
      )}
    </div>
  );
};

export default Footer;
