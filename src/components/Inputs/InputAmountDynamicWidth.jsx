import './InputAmountDynamicWidth.css';
import { useState } from 'react';

const InputAmountDynamicWidth = () => {
  const [amount, setAmount] = useState(0);
  const [inputLength, setInputLength] = useState(0);
  const inputWidth = (chars) => (chars === 0 ? 50 : chars * 50);

  const handleChange = (e) => {
    setAmount(e.target.value);
    setInputLength(e.target.value.length);
  };

  return (
    <input
      className='InputAmountDynamicWidth'
      value={amount}
      type='number'
      name='amount'
      min='1'
      max='999999'
      placeholder={0}
      style={{ width: inputWidth(inputLength) + 'px' }}
      onChange={(e) => handleChange(e)}
    />
  );
};

export default InputAmountDynamicWidth;
