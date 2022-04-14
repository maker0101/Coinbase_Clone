import './TabContentBuyEmpty.css';

import { Button, TabContent, Text } from '..';

import { HiExclamationCircle } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const TabContentBuyEmpty = () => {
  const navigate = useNavigate();

  return (
    <TabContent>
      <div className='tabContentBuyEmpty'>
        <HiExclamationCircle className='tabContentBuyEmpty__icon' />
        <div className='tabContentBuyEmpty__heading'>
          <Text h3>Deposit required</Text>
        </div>
        <div className='tabContentBuyEmpty__content'>
          <Text color='grey'>
            You'll need to deposit money into your fiat wallet before you can
            buy any assets.
          </Text>
        </div>
        <Button size='xxl' onClick={() => navigate('/deposit')}>
          Deposit Funds
        </Button>
      </div>
    </TabContent>
  );
};

export default TabContentBuyEmpty;
