import './InputAmountContainer.css';

import InputAmountDynamicWidth from './InputAmountDynamicWidth';
import { Text } from '..';
import { TransactionFormContext } from '../../contexts/TransactionFormContext';
import { useContext } from 'react';

const InputAmountContainer = () => {
  const { amountError } = useContext(TransactionFormContext);

  return (
    <div className='InputAmountContainer'>
      <div className='inputAmountContainer_amount'>
        <span className='inputAmountContainer_currency'>€</span>
        <InputAmountDynamicWidth />
      </div>
      <div className='inputAmountContainer_amountError'>
        <Text color='red'>{amountError}</Text>
      </div>
    </div>
  );
};

export default InputAmountContainer;
