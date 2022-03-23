import './InputAmountDynamicWidth.css';
import { useState, useContext, useEffect } from 'react';
import { AmountContext } from '../../contexts/AmountContext';

const InputAmountDynamicWidth = () => {
  const { amount, setAmount } = useContext(AmountContext);
  const [chars, setChars] = useState(0);
  const inputWidth = (chars) => (chars === 0 ? 50 : chars * 50);

  useEffect(() => {
    setChars(amount ? amount.length : 1);
  }, [amount]);

  return (
    <input
      className='InputAmountDynamicWidth'
      value={amount}
      type='number'
      name='amount'
      min='1'
      max='999999'
      placeholder={0}
      style={{ width: inputWidth(chars) + 'px' }}
      onChange={(e) => setAmount(e.target.value)}
    />
  );
};

export default InputAmountDynamicWidth;
